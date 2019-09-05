import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import SearchInput from './components/SearchInput/SeachInput';
import ShowDataOrLoading from './components/ShowDataOrLoading';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <SearchInput />
      <ShowDataOrLoading />
    </Provider>
  );
}

export default App;
