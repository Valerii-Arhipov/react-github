import React from 'react';
import { useSelector } from 'react-redux';

const Error = function (props) {
  const { errorIsNotFound } = useSelector(state => ({
    errorIsNotFound: state.errorIsNotFound,
  }));
  return (<span className="error-search">{errorIsNotFound ? 'user not found' : 'unexpected error'}</span>);
};

export default React.memo(Error);
