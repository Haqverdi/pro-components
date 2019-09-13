import "antd/lib/empty/style";
import _Empty from "antd/lib/empty";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
export function ProEmpty(_ref) {
  var _ref$description = _ref.description,
      description = _ref$description === void 0 ? 'Not Found' : _ref$description,
      rest = _objectWithoutProperties(_ref, ["description"]);

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  return React.createElement(_Empty, _extends({}, rest, {
    description: t(description)
  }));
}
ProEmpty.propTypes = {
  description: PropTypes.string
};