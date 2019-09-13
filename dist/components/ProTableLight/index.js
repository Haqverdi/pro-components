import "antd/lib/table/style";
import _Table from "antd/lib/table";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
export function ProTableLight(props) {
  return React.createElement("div", null, React.createElement(_Table, _extends({
    className: styles.table,
    bordered: false,
    pagination: false,
    locale: {
      emptyText: ' ' // dont show No data empty image and text

    }
  }, props)));
}
ProTableLight.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array
};
ProTableLight.defaultProps = {
  columns: [],
  dataSource: []
};