import { put, takeEvery, delay } from 'redux-saga/effects'

function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
  }
  
export function* incrementAsyncSaga() {
    yield takeEvery('INCREMENT_ASYNC_SAGA', incrementAsync)
  }