import { call, put } from 'redux-saga/effects';

import { usersURL } from '../../../constants/Github/APIConstants';
import { SearchRepositoriesSuccessAction } from '../../actions/Search/Index';

import request from '../../../constants/Github/API.service';

export default function* SearchRepositoriesSaga({ payload: username }) {
  try {
    const repositories = yield call(request, `${usersURL}${username}/repos`);
    yield put(SearchRepositoriesSuccessAction(repositories));
  } catch (e) {
    console.log(e);
  }
}
