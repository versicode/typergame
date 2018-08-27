export default class Typer {
    constructor(game, dictionary, foodFactory, player, client) {
        this.game = game
        this.dictionary = dictionary
        this.foodFactory = foodFactory
        this.player = player
        this.client = client
        this.currentTypedString = ''
    }

    init() {
        let backspace = this.game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE)
        backspace.onDown.add(() => this.resetCurrentTypedString(), this)

        this.game.input.keyboard.addCallbacks(this, null, null, function (stringFromCharCode /* , event */) {
            this.currentTypedString += stringFromCharCode
            console.log(this.currentTypedString)

            if (!this.dictionary.isWordsInUseContainString(this.currentTypedString)) {
                // reset if no words in used words
                console.log('reset')
                this.currentTypedString = ''
            }
            
            if (this.dictionary.isWordsInUseContainWord(this.currentTypedString)) {
                // move to food and eat it
                let food = this.foodFactory.findFoodByWord(this.currentTypedString)

                if (food) {
                    this.resetCurrentTypedString()

                    // this.game.physics.arcade.moveToObject(this.player, food, 2000)

                    this.player.setTarget(food)
                    // this.client.playerMove(this.player)
                    // this.player.x = food.x
                    // this.player.y = food.y
                    this.player.life += 1
                }

            }
            // console.log(stringFromCharCode, event)
        })
    }

    resetCurrentTypedString() {
        console.log('resetted')
        this.currentTypedString = ''
    }
}
