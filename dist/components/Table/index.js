import "antd/lib/row/style";
import _Row from "antd/lib/row";
import "antd/lib/col/style";
import _Col from "antd/lib/col";
import "antd/lib/table/style";
import _Table from "antd/lib/table";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
export function Table(_ref) {
  var footer = _ref.footer,
      rest = _objectWithoutProperties(_ref, ["footer"]);

  return React.createElement("div", null, React.createElement(_Table, _extends({
    rowClassName: styles.row,
    className: styles.table,
    pagination: false,
    bordered: true
  }, rest)), footer ? React.createElement("div", {
    className: styles.footer
  }, footer) : null);
}
export function TableFooter(_ref2) {
  var mebleg = _ref2.mebleg,
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? 'Total' : _ref2$title;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  return React.createElement(_Row, {
    style: {
      fontWeight: 500
    }
  }, React.createElement(_Col, {
    span: 12
  }, t(title), ":"), React.createElement(_Col, {
    span: 12,
    style: {
      textAlign: 'right'
    }
  }, mebleg));
}
Table.propTypes = {
  footer: PropTypes.element
};
TableFooter.propTypes = {
  mebleg: PropTypes.any,
  title: PropTypes.string
};