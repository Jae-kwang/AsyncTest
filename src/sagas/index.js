import { all } from 'redux-saga/effects'

import { incrementAsyncSaga } from './counterSaga';

export default function* rootSaga() {
    yield all([
        incrementAsyncSaga()
        // 다른 사가 추가
    ])
}
