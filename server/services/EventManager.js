import serverConfig from '../config/serverConfig'
import RealPlayer from '../entities/RealPlayer'

export default class EventManager {
    constructor(game, playerRepository) {
        this.game = game
        this.playerRepository = playerRepository
    }

    listen(io) {
        const map = this.game.world.map

        io.sockets.on(serverConfig.IO.DEFAULT_CONNECTION, (socket) => {
            socket.on(serverConfig.IO.INCOMING.PLAYER.JOIN, (clientPlayer) => {
                const pos = map.getRandomPosition()

                map.setPositionState(pos.x, pos.y, map.STATE.PLAYER)

                let player = new RealPlayer(pos.x, pos.y, clientPlayer.name, socket)

                this.playerRepository.add(player)

                // send to new player list of players
                const enemyPlayers = this.playerRepository.getAllPlayers().filter((enemyPlayer) => enemyPlayer.name !== player.name)

                socket.emit(serverConfig.IO.OUTGOING.PLAYER.ALL, enemyPlayers)

                // send new player to all players
                socket.broadcast.emit(serverConfig.IO.OUTGOING.PLAYER.JOIN, player.toClient())

                console.log(`currently ${this.playerRepository.getPlayersCount()} in the game`)

                socket.on(serverConfig.IO.INCOMING.PLAYER.DISCONNECT, () => {
                    console.log('player to remov')
                    io.emit(serverConfig.IO.OUTGOING.PLAYER.DISCONNECT, player.toClient())

                    this.playerRepository.remove(player)
                })

                console.log(map.map)
            })


            // world.playerRepository.addNewClient(socket)

            // world.playerRepository.watchForNewPlayers(socket)
            // world.playerRepository.watchForLeavingPlayers(socket)


            // console.log('client connected')
            // console.log(players)

        })
    }

    watchForNewPlayers(socket) {
        

        this.collection.forEach((client) => {
            socket.on(serverConfig.IO.INCOMING.PLAYER.JOIN, (name) => {
                console.log(`Name is: ${name}, welcome!`)


                this.collection.push(player)
                console.log(this.collection)
            })
        })
    }

    watchForLeavingPlayers() {

    }
}
