import React from 'react';
import PropTypes from 'prop-types';

import withStore from './store';

import css from './styles.scss';

const ItemList = props => {
  const {
    id,
    idFb,
    name,
    description,
    status,
    createDate,
    updateStatus
  } = props;

  return (
    <tr className={css.contentItem}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{status}</td>
      <td>{createDate}</td>
      <td>
        {status !== 'toDo' && (
          <div
            className={css.todo}
            role="button"
            tabIndex={0}
            onKeyPress={() => null}
            onClick={() => updateStatus(idFb, 'toDo')}
          >
            To do
          </div>
        )}
        {status !== 'done' && (
          <div
            className={css.done}
            role="button"
            tabIndex={0}
            onKeyPress={() => null}
            onClick={() => updateStatus(idFb, 'done')}
          >
            Done
          </div>
        )}
        {status !== 'deleted' && (
          <div
            className={css.delete}
            role="button"
            tabIndex={0}
            onKeyPress={() => null}
            onClick={() => updateStatus(idFb, 'deleted')}
          >
            Delete
          </div>
        )}
      </td>
    </tr>
  );
};

ItemList.propTypes = {
  id: PropTypes.number.isRequired,
  idFb: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  createDate: PropTypes.string.isRequired,
  updateStatus: PropTypes.func.isRequired
};

export default withStore(ItemList);
