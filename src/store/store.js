import createSagaMiddleware from 'redux-saga'
import {createStore,applyMiddleware} from 'redux'
import rootReducers from '../reducers/rootReducers';
import rootSagas from '../sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSagas);

export default store;