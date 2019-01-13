import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import withStore from './store';

import css from './styles.scss';

const Home = props => {
  const { getList, list } = props;

  return (
    <div>
      <p className={css.color}>Hello Next.js</p>
      <button type="button" onClick={() => getList()}>
        Cargar listas
      </button>
      {list.length > 0 &&
        map(list, item => (
          <div key={item.id}>
            <div>{item.id}</div>
            <div>{item.name}</div>
          </div>
        ))}
    </div>
  );
};

Home.propTypes = {
  getList: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
};

export default withStore(Home);
