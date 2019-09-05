import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { put } from 'redux-saga/effects';

import App from './App';
import {
  UserNotFoundAction,
  SearchRepositoriesAction,
  SearchUserSuccessAction,
  SearchOrgsAction,
  SearchAction,
} from './store/actions/Search/Index';
import SearchInput from './components/SearchInput/SeachInput';
import { USER_NOT_FOUND } from './constants/Github/ConstansType';
import SearchReducer from './store/reducers/SearchReducer';
import UserSearch from './store/sagas/SearchSaga/SearchUserSaga';
import { initialState } from './store/reducers/SearchReducer';


configure({
  adapter: new Adapter(),
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  const mockStore = configureStore();

  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
  it('render search input', () => {
    expect(wrapper.find(SearchInput).length).toEqual(1);
  });

  it('test action user not found', () => {
    store.dispatch(UserNotFoundAction());
    const action = store.getActions();
    expect(action[0].type).toEqual(USER_NOT_FOUND);
  });
  it('actionCreator search', () => {
    const search = SearchAction('testusername');
    expect(search).toEqual({ type: 'SEARCH', payload: 'testusername' });
  });
  it('reducer for USER_NOT_FOUND', () => {
    let state = initialState;
    state = SearchReducer(state, UserNotFoundAction());
    expect(state).toEqual({ ...initialState, error: true, errorIsNotFound: true });
  });
  it('test saga', () => {
    const sagaGen = UserSearch(SearchAction('a'));
    sagaGen.next();
    expect(sagaGen.next().value).toEqual(put(SearchUserSuccessAction()));
    expect(sagaGen.next().value).toEqual(put(SearchRepositoriesAction('a')));
    expect(sagaGen.next().value).toEqual(put(SearchOrgsAction('a')));
  });
});
