import React from 'react';
import PropTypes from 'prop-types';
import css from './styles.scss';

const InputSimple = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div className={css.contentInput}>
    <span>{label}</span>
    <div>
      <input
        className={css.inputStyle}
        {...input}
        placeholder={placeholder}
        type={type}
      />
      <div>
        {touched &&
          ((error && <div className={css.error}>{error}</div>) ||
            (warning && <div className={css.error}>{warning}</div>))}
      </div>
    </div>
  </div>
);

InputSimple.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

InputSimple.defaultProps = {
  type: 'text',
  placeholder: ''
};

export default InputSimple;
