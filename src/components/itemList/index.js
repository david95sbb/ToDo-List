import React from 'react';
import PropTypes from 'prop-types';

import css from './styles.scss';

const ItemList = props => {
  const { id, name, description, status, createDate } = props;

  return (
    <tr className={css.contentItem}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{status}</td>
      <td>{createDate}</td>
      <td>
        {status !== 'toDo' && <div className={css.todo}>To do</div>}
        {status !== 'done' && <div className={css.done}>Done</div>}
        {status !== 'deleted' && <div className={css.delete}>Delete</div>}
      </td>
    </tr>
  );
};

ItemList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  createDate: PropTypes.string.isRequired
};

export default ItemList;
