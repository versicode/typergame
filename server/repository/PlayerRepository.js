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

}

