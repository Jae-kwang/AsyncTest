import { ofType } from 'redux-observable';
import { mapTo, delay } from 'rxjs/operators';

const incrementAsyncEpic = action$ => action$.pipe(
    ofType('INCREMENT_ASYNC_EPIC'),
    delay(1000),
    mapTo({ type: 'INCREMENT' })
);

export {
    incrementAsyncEpic
}