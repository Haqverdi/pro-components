import "antd/lib/input/style";
import _Input from "antd/lib/input";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropType from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
export function ProSearch(props) {
  var onSearch = props.onSearch,
      label = props.label,
      placeholder = props.placeholder,
      rest = _objectWithoutProperties(props, ["onSearch", "label", "placeholder"]);

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  return React.createElement("div", {
    className: styles.search
  }, React.createElement("label", {
    htmlFor: "search"
  }, t(label)), React.createElement(_Input.Search, _extends({
    id: "search",
    placeholder: t(placeholder),
    onSearch: onSearch
  }, rest)));
}
ProSearch.propTypes = {
  onSearch: PropType.func,
  placeholder: PropType.string,
  label: PropType.string
};
ProSearch.defaultProps = {
  onSearch: function onSearch(value) {
    return console.log(value);
  },
  placeholder: 'search',
  label: 'Search'
};