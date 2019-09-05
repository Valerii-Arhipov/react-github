import { call, put } from 'redux-saga/effects';

import { usersURL } from '../../../constants/Github/APIConstants';
import {
  SearchUserSuccessAction,
  SearchRepositoriesAction,
  SearchOrgsAction,
  UserNotFoundAction,
  ErrorResponseAction,
} from '../../actions/Search/Index';

import request from '../../../constants/Github/API.service';

export default function* SearchUserSaga({ payload: username }) {
  try {
    const userData = yield call(request, `${usersURL}${username}`);
    yield put(SearchUserSuccessAction(userData));
    yield put(SearchRepositoriesAction(username));
    yield put(SearchOrgsAction(username));
  } catch (e) {
    if (e.response.status === 404) {
      yield put(UserNotFoundAction());
    } else {
      yield put(ErrorResponseAction());
    }
  }
}
