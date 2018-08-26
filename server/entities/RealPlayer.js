import Player from './Player'

export default class RealPlayer extends Player {
    constructor(x, y, name, socket) {
        super(x, y, name, socket)

        this.socket = socket
    }
}
