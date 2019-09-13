import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { maskedInput } from './maskedStyles.module.scss';

// mask types
const masks = {
  homePhoneMask: [
    '(',
    '+',
    /[0-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  mobilePhoneMask: [
    '(',
    '+',
    /[0-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ],
};
export function ProMaskedInput(props) {
  const { name, label, id, mask, ...rest } = props;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <MaskedInput
        className={maskedInput}
        name={name}
        mask={masks[mask]}
        autoComplete="off"
        // autoComplete="new-password" // new-lastname both didnt work
        {...rest}
        // showMask
      />
    </div>
  );
}

ProMaskedInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  mask: PropTypes.oneOf(['homePhoneMask', 'mobilePhoneMask']).isRequired,
};
