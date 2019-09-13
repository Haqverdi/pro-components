import React from 'react';
import PropTypes from 'prop-types';
import styles from './proFilter.module.scss';

export function ProFilterButton(props) {
  const { children, active, ...rest } = props;

  return (
    <button
      type="button"
      {...rest}
      className={`${styles.button} ${active ? styles.active : ''}`}
    >
      {children}
    </button>
  );
}

ProFilterButton.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
};
