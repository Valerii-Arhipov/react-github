import React from 'react';
import PropTypes from 'prop-types';

const RepositoriesList = function (props) {
  const { repositories } = props;
  return (
    <div className="repositories">
      <span className="repositories__label">Repositories</span>
      {repositories.length
        ? (
          <div className="repositories__list">
            {repositories.map(item => (
              <div
                key={item.id}
                className="repositories__list-item"
              >
                <a
                  href={item.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        )
        : (
          <span className="repositories__dont-have">
            {"this user doesn't have repositories"}
          </span>
        )
      }
    </div>
  );
};

RepositoriesList.propTypes = {
  repositories: PropTypes.instanceOf(Array).isRequired,
};

export default React.memo(RepositoriesList);
