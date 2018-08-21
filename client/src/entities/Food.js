import GameObject from './GameObject'

export default class Food extends GameObject {
    constructor(game, x, y) {
        super(game, x, y, 'food')

        this.body.collideWorldBounds = true
        this.body.bounce.set(1)
        // this.body.velocity.setTo(1, 1000)
        this.body.mass = 0.5
        this.body.width = 32
        this.body.height = 32
        // this.x      = 100
        // this.y      = 100
        // this.width  = 15
        // this.height = 15
        // this.sprite = null
        // this.color  = '#cccccc'
        // this.text   = null
        // this.word   = 'food'
    }
}
