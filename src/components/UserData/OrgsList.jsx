import React from 'react';
import PropTypes from 'prop-types';

const OrgsList = function (props) {
  const { orgs } = props;
  return (
    <div className="orgs">
      <span className="orgs__label">Organizations</span>
      {orgs.length
        ? (
          <div className="orgs__list">
            {orgs.map(item => (
              <div
                key={item.id}
                className="orgs__list-item"
              >
                <img src={item.avatar_url} alt="org-avatar" />
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        )
        : (
          <span className="orgs__dont-have">
            {"this user doesn't have organizations"}
          </span>
        )
      }
    </div>
  );
};

OrgsList.propTypes = {
  orgs: PropTypes.instanceOf(Array).isRequired,
};

export default React.memo(OrgsList);
