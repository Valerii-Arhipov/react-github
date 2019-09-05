import { fork } from 'redux-saga/effects';

import SearchSaga from './SearchSaga/index';


export default function* IndexSaga() {
  yield fork(SearchSaga);
}
