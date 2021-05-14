module.exports = {
    CASH_CUT_BREAKUP: {
        CASH_BONUS: 5, //Share Percent
        UNUTILIZED: 100, //Share Percent
        WINNIG: 100 //Share Percent
    },

    TIMERS: {
        MAX_TURN_SECONDARY_TIMER: 60, //In Seconds,
        MAX_TURN_PRIMARY_TIMER: 30, //In seconds,
        CARD_DISTRIBUTION_ANIMATION: 6, //In seconds
        DECLARATION_TIMER: 30, //IN Seconds
        TOPUP_TIMER: 6, //In Seconds
        DELAY_AFTER_RESULT: 10,
        DELAY_AFTER_RESULT_AND_LEAVE: 10,
        MAX_JOIN_SEAT_TIMER: 30,
        MAX_TABLE_WAITING_TIMER: 300,
        BOT_JOIN_TIMER: 7,
        ROUND_TIMERS: {
            POOL: {
                INIT_SIX_PLAYERS: 21,
                ROUND_SIX_PLAYERS: 7, //After 1st Round
                INIT_TWO_PLAYERS: 7,
                ROUND_TWO_PLAYERS: 7
            },
            POINT: {
                INIT_SIX_PLAYERS: 11,
                ROUND_SIX_PLAYERS: 7, //After 1st Round
                INIT_TWO_PLAYERS: 7,
                ROUND_TWO_PLAYERS: 7
            }
        },
        LOCKS: {
            CARD_DISTRIBUTION: 3, //SECONDS
            DECLARATION: 30,
            PLAYER_ACTION: 3
        }
    },

    ROUND_STATUS: {
        INITIALIZED: 0,
        TIMER_STARTED: 1,
        COLLECTING_BOOT_VALUE: 2,
        CARD_DISTRIBUTION: 3,
        RUNNING: 4,
        WAITING: 5,
        DECLARE: 6,
        PICK: 7,
        DISCARD: 8,
        RESULT: 9
    },

    TABLE_STATUS: {
        WAITING: 1,
        ROUND_TIMER_STARTED: 2,
        RUNNING: 3,
        FINISHED: 4,
    },

    GAME_TYPES: {
        POINT: 1,
        POOL: 2,
        DEAL: 3,
        RAISE: 4
    },
    PLAYER_STATUS: {
        WATCHING: 1,
        PLAYING: 2,
        DROP: 3,
        LEFT: 4,
        WON: 5,
        LOST: 6,
        ELIMINATED: 7
    },

    TIMERS_FLAG: {
        START_ROUND_TIMER: 1
    },

    SCORE: {
        INVALID_FINISH: 80,
        FIRST_DROP: 20,
        MIDDLE_DROP: 40,
        FIRST_LEAVE: 20,
        MIDDLE_LEAVE: 40,
        POOL_FIRST_LEAVE_OR_DROP_201: 25,
        POOL_MIDDLE_LEAVE_OR_DROP_201: 50,
        VALID_DECLARE_SCORE: 2
    },

    MODE: {
        CASH: 1,
        PRACTICE: 2,
        PLAY_WITH_FRIENDS: 3,
        TOURNAMENT: 4
    },

    PLAYER_TYPES: {
        HUMAN: 1,
        ROBOT: 2
    },

    POOL_TYPES: {
        POOL_101: 101,
        POOL_201: 201
    },

    MAX_MISS_TURNS: 3,

    MAX_DEADWOOD_PTS: 80,

    SUSPECT_CHECK_LOC: 1,

    SUSPECT_CHECK_IP: 1,

    PURE_PERCENTAGE: 40,
    IMPURE_PERCENTAGE: 0,
    SET_PERCENTAGE: 30
};