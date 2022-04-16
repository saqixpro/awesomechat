import {takeEvery, call, takeLatest, put, all} from 'redux-saga/effects'
import { APIHandler } from '../api/api';
import * as actions from './actions';
const api = new APIHandler();

export function* loginUser(action) {
    try {
        const user = yield call(api.loginUser, {email: action.payload.email, password: action.payload.password});
        yield put({type: actions.LOGGED_IN, user })
    } catch(error){
        console.log(error);
    }
}

export function* UserSaga() {
    yield takeLatest(actions.LOGGING_IN, loginUser)
}

export default function* rootSaga() {
    yield all([
        UserSaga(),
    ])
}   