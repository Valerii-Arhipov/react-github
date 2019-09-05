import { call, put } from 'redux-saga/effects';

import { usersURL } from '../../../constants/Github/APIConstants';
import { SearchOrgsSuccessAction } from '../../actions/Search/Index';
import request from '../../../constants/Github/API.service';

export default function* SearchOrgsSaga({ payload: username }) {
  try {
    const orgs = yield call(request, `${usersURL}${username}/orgs`);
    yield put(SearchOrgsSuccessAction(orgs));
  } catch (e) {
    console.log(e);
  }
}
