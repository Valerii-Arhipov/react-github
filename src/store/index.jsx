import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import SearchReducer from './reducers/SearchReducer';
import IndexSaga from './sagas/indexSaga';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(SearchReducer, compose(applyMiddleware(sagaMiddleware), window.devToolsExtension
  ? window.devToolsExtension() : f => f));
sagaMiddleware.run(IndexSaga);

export default store;
