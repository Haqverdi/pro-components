import "antd/lib/icon/style";
import _Icon from "antd/lib/icon";
import "antd/lib/collapse/style";
import _Collapse from "antd/lib/collapse";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DownArrow } from './downarrow.svg';
import styles from './styles.module.scss';
var Panel = _Collapse.Panel;
export function ProPanel(_ref) {
  var children = _ref.children,
      header = _ref.header,
      key = _ref.key,
      rest = _objectWithoutProperties(_ref, ["children", "header", "key"]);

  return React.createElement(Panel, _extends({
    header: header,
    key: key
  }, rest, {
    className: styles.header
  }), children);
}
export function ProCollapse(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["children"]);

  return React.createElement(_Collapse, _extends({}, rest, {
    expandIconPosition: "right",
    bordered: false,
    expandIcon: function expandIcon(_ref3) {
      var isActive = _ref3.isActive;
      return React.createElement(_Icon, {
        // type="down"
        component: DownArrow,
        style: {
          fontSize: '10px'
        },
        rotate: isActive ? 180 : 0
      });
    },
    className: styles.collapse_override
  }), children);
}
ProPanel.propTypes = {
  children: PropTypes.any,
  header: PropTypes.string,
  key: PropTypes.string
};
ProCollapse.propTypes = {
  children: PropTypes.any
};