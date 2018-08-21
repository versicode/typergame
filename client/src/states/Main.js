/* global Phaser */

import FoodFactory from '../services/FoodFactory'
import Typer from '../services/Typer'
import * as dictionary from '../services/dictionary'
import Player from '../entities/Player'

export default class Main extends Phaser.State {

    preload() {
        this.game.load.image('food', 'assets/images/food.png')
        this.game.load.image('hero', 'assets/images/hero.png')
    }

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE)

        this.game.stage.disableVisibilityChange = true
        this.game.stage.backgroundColor = '#c4dcb2'

        // Initialize game objects

        this.player = new Player(this.game, 200, 200)
        this.foodFactory = new FoodFactory(this.game)

        this.player.init()
        this.foodFactory.init()


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

        this.game.physics.arcade.collide(this.player, this.player.target, (player, food) => {
            this.player.target = null
            this.player.body.velocity.set(0)
            food.kill()
        })


        // Food.update()
        // Player.update()
    }
 
}