import { takeEvery, all } from 'redux-saga/effects';

import SearchUserSaga from './SearchUserSaga';
import SearchRepositoriesSaga from './SearchRepositoriesSaga';
import SearchOrgsSaga from './SearchOrgsSaga';
import {
  SEARCH,
  SEARCH_REPOSITORIES,
  SEARCH_ORGS,
} from '../../../constants/Github/ConstansType';


export default function* WatcherSaga() {
  try {
    yield all([
      takeEvery(SEARCH, SearchUserSaga),
      takeEvery(SEARCH_REPOSITORIES, SearchRepositoriesSaga),
      takeEvery(SEARCH_ORGS, SearchOrgsSaga),
    ]);
  } catch (e) {
    console.log(e);
  }
}
