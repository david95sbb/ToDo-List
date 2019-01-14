import React from 'react';
import PropTypes from 'prop-types';

import FormCreate from '../../src/components/formCreate';

import css from './styles.scss';

import withStore from './store';

const CreateItem = props => {
  const { itemCreated, submitSuccess } = props;

  return (
    <div className={css.view}>
      <h1 className={css.title}>Create Item</h1>
      <div className={css.contentForm}>
        {itemCreated ? (
          <div>
            <div className={css.textResponse}>
              Congratulations, you successfully created an item for the list
            </div>
            <div className={css.buttonContainer}>
              <button
                className={css.buttonSave}
                type="button"
                onClick={() => submitSuccess()}
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        ) : (
          <FormCreate />
        )}
      </div>
    </div>
  );
};

CreateItem.propTypes = {
  itemCreated: PropTypes.bool.isRequired,
  submitSuccess: PropTypes.func.isRequired
};

export default withStore(CreateItem);
