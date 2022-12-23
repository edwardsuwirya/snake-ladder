import {
    RESET,
    RESET_REQUEST,
    ROLL_DICE,
    ROLL_DICE_REQUEST,
    SET_CURRENT_PLAYER, SET_CURRENT_PLAYER_REQUEST,
    SET_PLAYER_POSITION, SET_PLAYER_POSITION_REQUEST,
    SET_WINNER,
    SET_WINNER_REQUEST
} from "../../constants";

export const rollDiceRequestAction = () => {
    return {
        type: ROLL_DICE_REQUEST,
    }
}
export const rollDiceAction = (diceNo) => {
    return {
        type: ROLL_DICE,
        payload: {
            diceNo
        }
    }
}
export const setWinnerRequestAction = (winner) => {
    return {
        type: SET_WINNER_REQUEST,
        payload: {
            winner
        }
    }
}
export const setWinnerAction = (winner) => {
    return {
        type: SET_WINNER,
        payload: {
            winner
        }
    }
}

export const setCurrentPlayerRequestAction = (player) => {
    return {
        type: SET_CURRENT_PLAYER_REQUEST,
        payload: {
            player
        }
    }
}
export const setCurrentPlayerAction = (player) => {
    return {
        type: SET_CURRENT_PLAYER,
        payload: {
            player
        }
    }
}

export const setPlayerPositionRequestAction = (pos) => {
    return {
        type: SET_PLAYER_POSITION_REQUEST,
        payload: {
            pos
        }
    }
}
export const setPlayerPositionAction = (pos) => {
    return {
        type: SET_PLAYER_POSITION,
        payload: {
            pos
        }
    }
}

export const resetRequestAction = () => {
    return {
        type: RESET_REQUEST,
    }
}
export const resetAction = () => {
    return {
        type: RESET,
    }
}