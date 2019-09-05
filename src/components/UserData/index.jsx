import React from 'react';
import { useSelector } from 'react-redux';

import RepositoriesList from './RepositoriesList';
import OrgsList from './OrgsList';
import Error from './Error';

import './UserData.css';

const UserData = function () {
  const {
    userData, userRepositories, userOrgs, error,
  } = useSelector(state => ({
    userData: state.userData,
    userRepositories: state.userRepositories,
    userOrgs: state.userOrgs,
    error: state.error,
  }));
  return (
    <>
      {error
        ? <Error />
        : userData && (
        <>
          <div className="user-data">
            <img
              src={userData.avatar_url}
              alt="avatar"
              className="user-data__avatar"
            />
            <div className="user-data__text">
              { userData.login && (
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {userData.login}
                </a>
              )}
              { userData.name && <span>{userData.name}</span> }
              { userData.location && <span>{userData.location}</span>}
              { userData.company && <span>{userData.company}</span>}
            </div>
          </div>
          <RepositoriesList repositories={userRepositories} />
          <OrgsList orgs={userOrgs} />
        </>
        )
      }
    </>
  );
};

export default React.memo(UserData);
