import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';
import css from './styles.scss';

const TableContent = props => {
  const { params, children } = props;

  return (
    <table className={css.contentTable}>
      <thead>
        <tr>
          {map(params, item => (
            <th key={item.id} className={css.titleTable}>
              {item.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

TableContent.propTypes = {
  params: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired
};

export default TableContent;
