import { combineEpics } from 'redux-observable';

import { incrementAsyncEpic } from './counterEpic';

const rootEpic = combineEpics(
    incrementAsyncEpic
    // 다른 에픽 추가
);

export default rootEpic;