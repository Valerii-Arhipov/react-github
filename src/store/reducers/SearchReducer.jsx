import {
  SEARCH,
  SEARCH_USER_SUCCESS,
  SEARCH_REPOSITORIES_SUCCESS,
  SEARCH_ORGS_SUCCESS,
  USER_NOT_FOUND,
  ERROR_RESPONSE,
} from '../../constants/Github/ConstansType';

export const initialState = {
  searchRepositories: false,
  searchOrgs: false,
  userData: null,
  userRepositories: [],
  userOrgs: [],
  error: false,
  errorIsNotFound: false,
};

export default function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return { ...initialState, searchRepositories: true, searchOrgs: true };
    case SEARCH_USER_SUCCESS:
      return { ...state, userData: action.payload, userNotFound: false };
    case SEARCH_REPOSITORIES_SUCCESS:
      return { ...state, searchRepositories: false, userRepositories: action.payload };
    case SEARCH_ORGS_SUCCESS:
      return { ...state, searchOrgs: false, userOrgs: action.payload };
    case USER_NOT_FOUND:
      return { ...initialState, error: true, errorIsNotFound: true };
    case ERROR_RESPONSE:
      return { ...initialState, error: true, errorIsNotFound: false };
    default:
      return state;
  }
}
