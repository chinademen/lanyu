import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducers from './reducers.js';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

let store = createStore(combineReducers, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;