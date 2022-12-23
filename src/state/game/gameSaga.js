import {
    RESET_REQUEST,
    ROLL_DICE_REQUEST,
    SET_CURRENT_PLAYER_REQUEST,
    SET_PLAYER_POSITION_REQUEST,
    SET_WINNER_REQUEST
} from "../../constants";
import {
    resetAction,
    rollDiceAction,
    setCurrentPlayerAction,
    setPlayerPositionAction,
    setWinnerAction
} from "./gameAction";
import {put, takeLatest} from 'redux-saga/effects';
import {randomInteger} from "../../util/randomUtil";

function* workerSetCurrentPlayer(action) {
    yield put(setCurrentPlayerAction(action.payload.player));
}

function* workerRollDice() {
    const diceNo = randomInteger(1, 6);
    yield put(rollDiceAction(diceNo));
}

function* workerSetPlayerPosition(action) {
    yield put(setPlayerPositionAction(action.payload.pos));
}

function* workerSetWinner(action) {
    yield put(setWinnerAction(action.payload.winner));
}

function* workerReset() {
    yield put(resetAction());
}


function* watchRollDice() {
    yield takeLatest(ROLL_DICE_REQUEST, workerRollDice);
}

function* watchWinner() {
    yield takeLatest(SET_WINNER_REQUEST, workerSetWinner);
}

function* watchCurrentPlayer() {
    yield takeLatest(SET_CURRENT_PLAYER_REQUEST, workerSetCurrentPlayer);
}

function* watchSetPlayerPosition() {
    yield takeLatest(SET_PLAYER_POSITION_REQUEST, workerSetPlayerPosition);
}

function* watchReset() {
    yield takeLatest(RESET_REQUEST, workerReset);
}

export const gameSaga = [
    watchRollDice, watchWinner, watchCurrentPlayer, watchSetPlayerPosition, watchReset
]