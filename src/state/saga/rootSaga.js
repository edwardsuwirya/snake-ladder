import {all, spawn} from 'redux-saga/effects';
import {gameSaga} from "../game/gameSaga";

function* rootSaga() {
    const sagas = [
        ...gameSaga
    ]
    yield all(
        sagas.map(saga => spawn(saga))
    );
}

export default rootSaga;