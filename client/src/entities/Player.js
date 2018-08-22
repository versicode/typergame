import GameObject from './GameObject'

export default class Player extends GameObject {
    constructor(game, x, y) {
        super(game, x, y, 'hero')

        this.game = game
        this.body.collideWorldBounds = true
        this.body.bounce.set(1)
        // this.body.velocity.setTo(10, 10)
        this.body.mass = 1
        this.body.width = 64
        this.body.height = 64

        this.target = null
        this.x = x
        this.y = y
        this.name = ''
        // this.width  = 50
        // this.height = 50
        // this.sprite = null
        // this.color  = '#cccccc'
        // this.text   = null
        // this.word   = 'player'
    }

    setName(name) {
        this.name += name
    }

    init() {
        super.init()
        this.game.add.existing(this)
    }

    update() {
        if (this.target) {
            let radians = this.game.physics.arcade.angleBetween(this, this.target)
            let degrees = radians * (180/Math.PI)
            this.game.physics.arcade.velocityFromAngle(degrees, 300, this.body.velocity)
        }
    }

    setTarget(target) {
        this.target = target
    }
}
