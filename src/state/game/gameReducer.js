import {RESET, ROLL_DICE, SET_CURRENT_PLAYER, SET_PLAYER_POSITION, SET_WINNER} from "../../constants";

const gameInitialState = {
    winner: null,
    dice: 0,
    currentPlayer: '1',
    playerPosition: [],
}

export const gameReducer = (state = gameInitialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PLAYER:
            return {...state, currentPlayer: action.payload.player, dice: 0}
        case SET_PLAYER_POSITION:
            return {...state, playerPosition: [...action.payload.pos]}
        case ROLL_DICE:
            return {...state, dice: action.payload.diceNo}
        case SET_WINNER:
            return {...state, winner: action.payload.winner}
        case RESET:
            return {
                winner: null,
                dice: 0,
                currentPlayer: '1',
                playerPosition: [],
            }
        default:
            return state
    }
}

