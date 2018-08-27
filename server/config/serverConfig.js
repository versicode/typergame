const serverConfig = {
    MAX_FOOD: 25,
    MAP: {
        WIDTH: 800,
        HEIGHT: 600,
        PIECE: 32,
    },
    IO: {
        DEFAULT_CONNECTION: 'connection',
        INCOMING: {
            PLAYER: {
                JOIN: 'player join',
                DISCONNECT: 'disconnect',
            }
        },
        OUTGOING: {
            PLAYER: {
                ALL: 'all players',
                JOIN: 'player join',
                DISCONNECT: 'disconnect',
            }
        }
    }

}

export default serverConfig
