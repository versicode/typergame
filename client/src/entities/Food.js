import GameObject from './GameObject'

export default class Food extends GameObject {
    constructor(game, x, y) {
        super(game, x, y, 'food')

        this.body.collideWorldBounds = true
        this.body.bounce.set(1)
        this.body.mass = 0.5
        this.body.width = 32
        this.body.height = 32
    }
}
