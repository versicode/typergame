import io from 'socket.io-client'

export default class Client {
    constructor() {
        this.socket = io.connect('http://localhost:3000')
    }

    askNewPlayer(name) {
        console.log(name)
        this.socket.emit('newplayer', name)
    }
}
