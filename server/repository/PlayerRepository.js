import Repository from './Repository'

export default class PlayerRepository extends Repository {
    constructor(io) {
        super()

        this.collection = []
        this.io = io
    }

    add(player) {
        this.collection.push(player)
    }

    remove(playerToRemove) {
        this.collection = this.collection.filter((player) => player !== playerToRemove)
    }

    getPlayersCount() {
        return this.collection.length
    }

    getAllPlayers() {
        return this.collection.map((player) => player.toClient())
    }

    watchForNewPlayers() {
        this.collection.forEach((client) => {
            socket.on(events.NEW_PLAYER, (name) => {
                console.log(`Name is: ${name}, welcome!`)
                let player = new RealPlayer()
                player.id = playerLastId++
                player.name = name
                players.push(player)
                // Нужно его поместить в рандомное место
            })
        })
    }

    watchForLeavingPlayers() {

    }
}

