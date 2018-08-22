import Koa      from 'koa'
import config   from 'config'
import http     from 'http'
import ioServer from 'socket.io'
import RealPlayer from './entities/RealPlayer'

const app = new Koa()

// app.use((ctx, next) => {
    // if (ctx.path !== '/favicon.ico') {
        // return next()
    // }
// })

const server = http.createServer(app.callback())
const io = ioServer(server)

let playerLastId = 0
const players = []

io.on('connection', (socket) => {
    console.log('client connected')
    console.log(players)

    socket.on('newplayer', (name) => {
        console.log(`Name is: ${name}, welcome!`)
        let player = new RealPlayer()
        player.id = playerLastId++
        player.name = name
        players.push(player)
        // Нужно его поместить в рандомное место
    })
})


server.listen(config.get('port'), () => {
    console.log(`Server running on port ${config.get('port')}`)
})


