import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit'

import Counter from './component/Counter';

import createSagaMiddleware from 'redux-saga'
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';

import rootSaga from './sagas';
import rootEpic from './epics';

const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    sagaMiddleware,
    epicMiddleware,
    thunk
  ],
})

sagaMiddleware.run(rootSaga)
epicMiddleware.run(rootEpic)

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
