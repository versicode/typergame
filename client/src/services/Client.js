import io from 'socket.io-client'
import clientConfig from '../config/clientConfig'
import Player from '../entities/Player'

export default class Client {
    constructor(game, stage) {
        this.socket = io.connect('http://localhost:3000')
        this.listen()
        this.game = game
        this.stage = stage
    }

    addNewPlayer(player) {
        this.socket.emit(clientConfig.IO.OUTGOING.PLAYER.JOIN, player.toServer())
    }

    listen() {

        this.socket.on(clientConfig.IO.INCOMING.PLAYER.ALL, (serverEnemyPlayers) => {
            console.log('all players')
            console.log(serverEnemyPlayers)

            serverEnemyPlayers.forEach((serverEnemyPlayer) => {
                // console.log(serverEnemyPlayer)
                const enemyPlayer = new Player(this.game, serverEnemyPlayer.x, serverEnemyPlayer.y)
                enemyPlayer.init()
                this.stage.enemyPlayers.push(enemyPlayer)
            })
        })

        this.socket.on(clientConfig.IO.INCOMING.PLAYER.JOIN, (serverEnemyPlayer) => {
            const enemyPlayer = new Player(this.game, serverEnemyPlayer.x, serverEnemyPlayer.y)
            enemyPlayer.init()
            this.stage.enemyPlayers.push(enemyPlayer)
        })

        this.socket.on(clientConfig.IO.INCOMING.PLAYER.DISCONNECT, (playerToRemove) => {
            console.log('remove player')
            console.log(playerToRemove)
        })
    }
}
