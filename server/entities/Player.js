import GameObject from './GameObject'

export default class Player extends GameObject {
    constructor(x, y, name) {
        super(x,y)
        this.name = name
        this.x = x
        this.y = y
        this.target = null
        this.lvl    = 1
    }

    toClient() {
        return {
            name: this.name,
            x: this.x,
            y: this.y,
        }
    }
}

