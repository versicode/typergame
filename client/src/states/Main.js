/* global Phaser */

import FoodFactory from '../services/FoodFactory'
import Typer from '../services/Typer'
import * as dictionary from '../services/dictionary'
import Player from '../entities/Player'
import Client from '../services/Client'

export default class Main extends Phaser.State {

    preload() {
        this.game.load.image('food', 'assets/images/food.png')
        this.game.load.image('hero', 'assets/images/hero.png')
    }

    create() {
        this.client = new Client(this.game, this)

        this.game.physics.startSystem(Phaser.Physics.ARCADE)

        this.game.stage.disableVisibilityChange = true
        this.game.stage.backgroundColor = '#c4dcb2'

        // Initialize game objects

        this.enemyPlayers = []
        this.player = new Player(this.game, Math.floor(Math.random() * 700) + 100, Math.floor(Math.random() * 400) + 100  )
        this.foodFactory = new FoodFactory(this.game)

        this.player.init()
        this.foodFactory.init()

        this.player.setName(prompt('What is your nickname?', 'Hero' + Math.floor(Math.random() * 10)))

        this.client.addNewPlayer(this.player)

        // Initialize services
        this.typer = new Typer(this.game, dictionary, this.foodFactory, this.player)

        this.typer.init()

        this.game.physics.arcade.collide(this.player, this.foodFactory.foods, (player, food) => {
            player.target = null
            food.kill()
        })
        // this.game.physics.arcade.collide(this.player, this.foodFactory.foods, (player, food) => {
            // food.kill()
        // })
    }
 
    update() {
        this.foodFactory.update()
        this.player.update()
        // if (this.enemyPlayers.length > 0) console.log('enemy player');
        this.enemyPlayers.forEach((player) => player.update())

        this.game.physics.arcade.collide(this.player, this.player.target, (player, food) => {
            this.player.target = null
            this.player.body.velocity.set(0)
            food.kill()
        })


        // Food.update()
        // Player.update()
    }
 
}
