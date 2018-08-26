import Koa        from 'koa'
import config     from 'config'
import http       from 'http'
import ioServer   from 'socket.io'
import RealPlayer from './entities/RealPlayer'
import World      from './services/World'
import PlayerRepository from './repository/PlayerRepository'
import Game       from './services/Game'

const app = new Koa()

// app.use((ctx, next) => {
    // if (ctx.path !== '/favicon.ico') {
        // return next()
    // }
// })

const server = http.createServer(app.callback())
const io = ioServer(server)

const playerRepository = new PlayerRepository()

const game = new Game(playerRepository)

game.listen(io)

// const world = new World(game, playerRepository)


server.listen(config.get('port'), () => {
    console.log(`Server running on port ${config.get('port')}`)
})


