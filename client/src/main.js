import Phaser from 'phaser'
import Main from './states/Main'
import config from './config'

class Game extends Phaser.Game {
 
    constructor() {
 
        // let game = new Phaser.Game(16*32, 600, Phaser.AUTO, document.getElementById('game'))
        // super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO)
        super(800, 600, Phaser.AUTO)
 
        this.state.add('Main', Main, false)
 
        this.state.start('Main')
    }
 
}
 
new Game()
