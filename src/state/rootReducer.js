import {combineReducers} from 'redux';
import {gameReducer} from "./game/gameReducer";

export const rootReducer = () => {
    return combineReducers({
        gameReducer
    })
}

