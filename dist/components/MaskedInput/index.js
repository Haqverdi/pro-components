function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { maskedInput } from './maskedStyles.module.scss'; // mask types

var masks = {
  homePhoneMask: ['(', '+', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  mobilePhoneMask: ['(', '+', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
};
export function ProMaskedInput(props) {
  var name = props.name,
      label = props.label,
      id = props.id,
      mask = props.mask,
      rest = _objectWithoutProperties(props, ["name", "label", "id", "mask"]);

  return React.createElement("div", null, React.createElement("label", {
    htmlFor: id
  }, label), React.createElement(MaskedInput, _extends({
    className: maskedInput,
    name: name,
    mask: masks[mask],
    autoComplete: "off" // autoComplete="new-password" // new-lastname both didnt work

  }, rest)));
}
ProMaskedInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  mask: PropTypes.oneOf(['homePhoneMask', 'mobilePhoneMask']).isRequired
};