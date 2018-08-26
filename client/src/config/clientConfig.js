const clientConfig = {
    MAX_FOOD: 25,
    MAP: {
        WIDTH: 800,
        HEIGHT: 600
    },
    IO: {
        INCOMING: {
            PLAYER: {
                ALL: 'all players',
                JOIN: 'player join',
                DISCONNECT: 'disconnect',
            }
        },
        OUTGOING: {
            PLAYER: {
                JOIN: 'player join',
                DISCONNECT: 'disconnect'
            }
        }
    }

}

export default clientConfig
