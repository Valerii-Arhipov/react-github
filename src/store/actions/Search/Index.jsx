import {
  ERROR_RESPONSE,
  USER_NOT_FOUND,
  SEARCH,
  SEARCH_ORGS,
  SEARCH_ORGS_SUCCESS,
  SEARCH_REPOSITORIES,
  SEARCH_REPOSITORIES_SUCCESS,
  SEARCH_USER_SUCCESS,
} from '../../../constants/Github/ConstansType';

function UserNotFoundAction() {
  return {
    type: USER_NOT_FOUND,
  };
}

function ErrorResponseAction() {
  return {
    type: ERROR_RESPONSE,
  };
}

function SearchAction(username) {
  return {
    type: SEARCH,
    payload: username,
  };
}

function SearchOrgsAction(username) {
  return {
    type: SEARCH_ORGS,
    payload: username,
  };
}

function SearchOrgsSuccessAction(repositories) {
  return {
    type: SEARCH_ORGS_SUCCESS,
    payload: repositories,
  };
}

function SearchRepositoriesAction(username) {
  return {
    type: SEARCH_REPOSITORIES,
    payload: username,
  };
}

function SearchRepositoriesSuccessAction(repositories) {
  return {
    type: SEARCH_REPOSITORIES_SUCCESS,
    payload: repositories,
  };
}

function SearchUserSuccessAction(userData) {
  return {
    type: SEARCH_USER_SUCCESS,
    payload: userData,
  };
}

export {
  UserNotFoundAction,
  ErrorResponseAction,
  SearchAction,
  SearchOrgsAction,
  SearchRepositoriesSuccessAction,
  SearchRepositoriesAction,
  SearchOrgsSuccessAction,
  SearchUserSuccessAction,
};
