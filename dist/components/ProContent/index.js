import "antd/lib/row/style";
import _Row from "antd/lib/row";
import "antd/lib/col/style";
import _Col from "antd/lib/col";
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
export function ProContent(_ref) {
  var title = _ref.title,
      children = _ref.children,
      right = _ref.right;
  return React.createElement("div", {
    className: styles.content
  }, React.createElement(_Row, null, React.createElement(_Col, {
    span: 24
  }, React.createElement("div", {
    className: styles.header
  }, React.createElement("p", null, title), right)), React.createElement(_Col, {
    span: 24
  }, React.createElement(_Row, null, React.createElement(_Col, {
    span: 24
  }, children)))));
}
ProContent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
  right: PropTypes.any
};