import serverConfig from '../config/serverConfig'

export default class Map {
    // Инициализация сетки карты
    constructor() {
        this.STATE = {
            PLAYER: 'p',
            FOOD: 'f',
            FREE: '',
        }

        this.map = []

        this.width  = serverConfig.MAP.WIDTH / serverConfig.MAP.PIECE
        this.height = serverConfig.MAP.HEIGHT / serverConfig.MAP.PIECE

        for (let i = 0; i < this.width; i += 1) {
            this.map[i] = []

            for (let j = 0; j < this.height; j += 1) {
                this.map[i][j] = this.STATE.FREE
            }
        }
    }

    getRandomPosition() {
        return this._getRandomFreePoint()
    }

    setPositionState(x, y, state) {
        this.map[x][y] = state
    }

    _getRandomFreePoint() {
        let x = this._getRandomInt(0, this.width-1)
        let y = this._getRandomInt(0, this.height-1)

        if (this.map[x][y] === this.STATE.FREE)
            return { x, y }

        return this._getRandomFreePoint()
    }
    _getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
}
