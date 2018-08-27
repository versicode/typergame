import serverConfig from '../config/serverConfig'

export default class World {
    constructor(playerRepository) {
        this._initMap()
        

        // this.playerRepository(playerRepository)
    }

    // Инициализация сетки карты
    _initMap() {
        this.map = []

        const width  = serverConfig.MAP.WIDTH / serverConfig.MAP.PIECE
        const height = serverConfig.MAP.HEIGHT / serverConfig.MAP.PIECE

        for (let i = 0; i < width; i += 1) {
            this.map[i] = []

            for (let j = 0; j < height; j += 1) {
                this.map[i][j] = []
            }
        }
    }
}
