import React from 'react';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

import UserData from './UserData';

const ShowDataOrLoading = function (props) {
  const { searchRepositories, searchOrgs } = useSelector(state => ({
    searchRepositories: state.searchRepositories,
    searchOrgs: state.searchOrgs,
  }));
  return (
    <React.Fragment>
      { searchRepositories || searchOrgs
        ? (
          <div style={{ margin: '0 auto', width: '100px' }}>
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={100}
              width={100}
            />
          </div>
        )
        : <UserData />
      }
    </React.Fragment>
  );
};

export default React.memo(ShowDataOrLoading);
