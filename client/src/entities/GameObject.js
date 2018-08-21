import Phaser from 'phaser'
import * as dictionary from '../services/dictionary'

export default class GameObject extends Phaser.Sprite {
    constructor(game, x, y, name) {
        super(game, x, y, name)

        this.game = game

        this.game.physics.enable(this, Phaser.Physics.ARCADE)

        this.word = '...'

        this.isAlive = true

        // this.x      = 100
        // this.y      = 300
        // this.width  = 50
        // this.height = 50
        // this.sprite = null
        // this.color  = '#cccccc'
        // this.text   = null
        // this.life   = 1
    }

    init() {
        this._drawWord()
    }

    _drawWord() {
        this.word = dictionary.getRandomWord()

        let style = { font: '12px Verdana', wordWrap: true, wordWrapWidth: this.width, align: 'center',  boundsAlignH: 'center' }

        this._text = this.game.add.text(0, 0, this.word, style)
        this._text.anchor.set(0.5)
    }

    update() {
        if (this.isAlive) {
            this._text.x = Math.floor(this.x + this.width / 2)
            this._text.y = Math.floor(this.y - 10)
        }
    }

    kill() {
        super.kill()
        this.isAlive = false
        this._text.kill()
    }

    // setup() {
        // this.sprite = game.add.sprite(this.width, this.height)

        // this.sprite.addChild(this.getGraphics())

        // var style = { font: "16px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: this.width, align: "center", backgroundColor: "#ffff00" };

        // this.text = game.add.text(0, 0, this.word, style)
        // this.text.anchor.set(0.5)
    // }

    // getGraphics() {
        // let graphics = game.add.graphics(0, 0)

        // // set a fill and line style
        // graphics.beginFill(hexToColor(this.color))
        // graphics.lineStyle(10, 0xffd900, 1)

        // // draw a rectangle
        // graphics.lineStyle(2, 0x0000FF, 1)
        // graphics.drawRect(this.x, this.y, this.width, this.height)

        // return graphics
    // }

    // update() {
        // this.text.x = Math.floor(this.x + this.width / 2) + 50
        // this.text.y = Math.floor(this.y + this.height / 2) +50
    // }

    // remove() {
        // this.sprite.kill()
        // this.text.kill()
    // }
}
