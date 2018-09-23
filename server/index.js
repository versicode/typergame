import Koa        from 'koa'
import config     from 'config'
import http       from 'http'
import ioServer   from 'socket.io'
import RealPlayer from './entities/RealPlayer'
import World      from './services/World'
import PlayerRepository from './repository/PlayerRepository'
import Game       from './services/Game'
import Map        from './services/Map'
import EventManager        from './services/EventManager'

const app = new Koa()

// app.use((ctx, next) => {
    // if (ctx.path !== '/favicon.ico') {
        // return next()
    // }
// })

const server = http.createServer(app.callback())
const io = ioServer(server)





const map   = new Map()
// All map and other world things
const world = new World(map)
// Service locator
const game = new Game(world)

const playerRepository = new PlayerRepository(game)

const eventManager = new EventManager(game, playerRepository)

eventManager.listen(io, playerRepository)








server.listen(config.get('port'), () => {
    console.log(`Server running on port ${config.get('port')}`)
})


