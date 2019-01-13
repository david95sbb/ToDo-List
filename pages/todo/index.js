import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import size from 'lodash/size';
import withStore from './store';

import css from './styles.scss';

const Home = props => {
  const { getList, list } = props;

  return (
    <div>
      <p className={css.color}>To Do</p>
      <button type="button" onClick={() => getList()}>
        Cargar listas
      </button>
      {size(list) > 0 ? (
        map(list, item => (
          <div key={item.id}>
            <div>{item.id}</div>
            <div>{item.name}</div>
          </div>
        ))
      ) : (
        <div>No hay listas</div>
      )}
    </div>
  );
};

Home.propTypes = {
  getList: PropTypes.func.isRequired,
  list: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default withStore(Home);
