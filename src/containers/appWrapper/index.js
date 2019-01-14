import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import css from './styles.scss';

const AppWrapper = props => {
  const { children } = props;

  return (
    <Fragment>
      <div className={css.contetView}>{children}</div>
    </Fragment>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppWrapper;
