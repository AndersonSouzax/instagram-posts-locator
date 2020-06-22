import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	mainReducer,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;