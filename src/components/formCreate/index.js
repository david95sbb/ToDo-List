import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';

import InputSimple from '../../fields';

import css from './styles.scss';

import withStore from './store';

import { Router } from '../../../routes';

const validate = values => {
  const errors = {};

  if (!values.get('name')) {
    errors.name = 'The name is required';
  } else if (
    values.get('name') &&
    !/^[\s\S]{1,15}$/i.test(values.get('name'))
  ) {
    errors.name = 'The field must have a maximum of 15 characters';
  }

  if (!values.get('description')) {
    errors.description = 'The description is required';
  } else if (
    values.get('description') &&
    !/^[\s\S]{1,25}$/i.test(values.get('description'))
  ) {
    errors.description = 'The field must have a maximum of 25 characters';
  }

  return errors;
};

const warn = values => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};

  if (values.get('name') && !/^[\s\S]{1,15}$/i.test(values.get('name'))) {
    errors.name = 'The field must have a maximum of 15 characters';
  }

  if (
    values.get('description') &&
    !/^[\s\S]{1,25}$/i.test(values.get('description'))
  ) {
    errors.description = 'The field must have a maximum of 25 characters';
  }

  return errors;
};

const FormCreate = props => {
  const { handleSubmit, submitCreate, submitting } = props;
  return (
    <div>
      <form onSubmit={handleSubmit(submitCreate)}>
        <Field
          name="name"
          component={InputSimple}
          label="Name"
          placeholder="Buy a car"
          type="text"
        />
        <Field
          name="description"
          component={InputSimple}
          label="Short description"
          placeholder="Red color and Ford brand"
          type="text"
        />
        <div className={css.buttonContainer}>
          <button
            className={css.buttonCancel}
            type="button"
            onClick={() => Router.pushRoute('/')}
          >
            Cancel
          </button>
          <button
            className={css.buttonSave}
            type="submit"
            disabled={submitting}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

FormCreate.propTypes = {
  submitCreate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'createItem',
  validate,
  warn
})(withStore(FormCreate));
