import GameObject from './GameObject'

export default class Player extends GameObject {
    constructor(x, y) {
        super(x, y)

        this.target = null
        this.lvl    = 1
    }
}
