import React from 'react';
import { useDispatch } from 'react-redux';

import { SearchAction } from '../../store/actions/Search/Index';

import './SearchInput.css';

const SearchInput = function (props) {
  const refInput = React.createRef();
  const dispatch = useDispatch();
  const submitSearchForm = (e) => {
    dispatch(SearchAction(refInput.current.value));
    e.preventDefault();
  };
  return (
    <form
      onSubmit={submitSearchForm}
      className="search-form"
    >
      <input
        ref={refInput}
        className="search-form__input"
        placeholder="Search"
      />
      <button
        type="submit"
        className="search-form__btn-submit"
      >
        search
      </button>
    </form>
  );
};

export default React.memo(SearchInput);
