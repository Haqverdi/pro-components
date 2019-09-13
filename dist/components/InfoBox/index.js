import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
export function InfoBoxItem(_ref) {
  var label = _ref.label,
      text = _ref.text,
      children = _ref.children;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  return React.createElement("div", {
    className: styles.viewOption
  }, React.createElement("div", {
    className: styles.label
  }, label), React.createElement("div", null, text || t('Not Found')), children && React.createElement("div", null, children));
}
export function InfoBox(_ref2) {
  var title = _ref2.title,
      children = _ref2.children;
  return React.createElement("div", {
    className: styles.infoBox
  }, React.createElement("div", {
    className: styles.content
  }, React.createElement("div", {
    className: styles.header
  }, title), children && React.createElement("div", {
    className: styles.body
  }, children)));
}
InfoBox.propTypes = {
  title: PropTypes.string,
  children: function children(props, propName, componentName) {
    var prop = props[propName];
    var error = null;
    React.Children.forEach(prop, function (child) {
      if (child.type !== InfoBoxItem) {
        error = new Error("".concat(componentName, " children should be of type InfoBoxItem."));
      }
    });
    return error;
  }
};
InfoBoxItem.propTypes = {
  label: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.any
};
InfoBoxItem.defaultProps = {
  text: 'Not Found'
};