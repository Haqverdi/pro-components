import "antd/lib/form/style";
import _Form from "antd/lib/form";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
export function ProFormItem(_ref) {
  var children = _ref.children,
      validateStatus = _ref.validateStatus,
      _ref$help = _ref.help,
      help = _ref$help === void 0 ? validateStatus ? 'Required' : '' : _ref$help,
      rest = _objectWithoutProperties(_ref, ["children", "validateStatus", "help"]);

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  return React.createElement(_Form.Item, _extends({}, rest, {
    colon: false,
    validateStatus: validateStatus,
    help: t(help),
    className: styles.formItem
  }), children);
}
ProFormItem.propTypes = {
  children: PropTypes.any,
  validateStatus: PropTypes.string,
  help: PropTypes.string
};