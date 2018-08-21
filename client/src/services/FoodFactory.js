import Food from '../entities/Food'

export default class FoodFactory {

    constructor(game) {
        this.game = game
        this.MAX_FOOD_NUMBER = 20

        this.foods = game.add.group()
        this.foods.enableBody = true
    }

    init() {
        let foodsToAdd = this.MAX_FOOD_NUMBER

        while (foodsToAdd !== 0) {
            let newFood = new Food(this.game, this.game.world.randomX, this.game.world.randomY)

            // if (this.foods.length > 0) {
                if (!this.game.physics.arcade.overlap(newFood, this.foods)) {
                    // newFood.width = 32
                    // newFood.height = 32
                    newFood.init()
                    this.foods.add(newFood)
                    foodsToAdd--
                }
            // } else {
                // this.foods.add(newFood)
            // }
        }
    }

    findFoodByWord(word) {
        let foods = this.foods.filter(food => food.word === word)
        // console.log(foods)

        return foods.total > 0 ? foods.first : null
    }

    update() {
        // console.log(this.constructor.name + ' update')
        this.game.physics.arcade.collide(this.foods, this.foods)

            // , (food1, food2) => {
            // let newPosition = {
                // x: food1.x + (Math.random() > 0.5 ? -32 : 32),
                // y: food2.y + (Math.random() > 0.5 ? -32 : 32),
            // }
            // console.log(newPosition)

        // this.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40)
            // this.game.physics.arcade.moveToXY(food1, newPosition.x, newPosition.y, 0, 1)
        // })
        // this.game.physics.arcade.collide(this.foods, this.foods, (food1, food2) => {
            // let newPosition = {
                // x: food1.x + (Math.random() > 0.5 ? -32 : 32),
                // y: food2.y + (Math.random() > 0.5 ? -32 : 32),
            // }
            // console.log(newPosition)
            // this.game.physics.arcade.moveToXY(food1, food1 + newPosition.x, food2.y + newPosition.y, 0, 500)
        // })
    }

}
