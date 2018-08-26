import serverConfig from '../config/serverConfig'
import RealPlayer from '../entities/RealPlayer'

export default class Game {

    constructor(playerRepository) {
        this.playerRepository = playerRepository
    }

    listen(io) {
        io.sockets.on(serverConfig.IO.DEFAULT_CONNECTION, (socket) => {
            socket.on(serverConfig.IO.INCOMING.PLAYER.JOIN, (clientPlayer) => {

                const player = new RealPlayer(clientPlayer.x, clientPlayer.y, clientPlayer.name, socket)

                this.playerRepository.add(player)

                // send to new player list of players
                socket.emit(serverConfig.IO.OUTGOING.PLAYER.ALL, this.playerRepository.getAllPlayers())

                // send new player to all players
                socket.broadcast.emit(serverConfig.IO.OUTGOING.PLAYER.JOIN, player.toClient())

                console.log(`currently ${this.playerRepository.getPlayersCount()} in the game`)

                socket.on(serverConfig.IO.INCOMING.PLAYER.DISCONNECT, () => {
                    console.log('player to remov')
                    io.emit(serverConfig.IO.OUTGOING.PLAYER.DISCONNECT, player.toClient())

                    this.playerRepository.remove(player)
                })
            })


            // world.playerRepository.addNewClient(socket)

            // world.playerRepository.watchForNewPlayers(socket)
            // world.playerRepository.watchForLeavingPlayers(socket)


            // console.log('client connected')
            // console.log(players)

        })
    }
}
