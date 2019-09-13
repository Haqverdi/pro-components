import "antd/lib/icon/style";
import _Icon from "antd/lib/icon";
import "antd/lib/select/style";
import _Select from "antd/lib/select";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ReactComponent as DownArrow } from './downarrow.svg';
import styles from './styles.module.scss';
var Option = _Select.Option; //

export var ProSelect = React.memo(function ProSelect(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? ['name'] : _props$keys,
      _props$showFirstEmpty = props.showFirstEmptyOption,
      showFirstEmptyOption = _props$showFirstEmpty === void 0 ? false : _props$showFirstEmpty,
      _props$hasError = props.hasError,
      hasError = _props$hasError === void 0 ? false : _props$hasError,
      _props$notFoundConten = props.notFoundContent,
      notFoundContent = _props$notFoundConten === void 0 ? 'No Found' : _props$notFoundConten,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      rest = _objectWithoutProperties(props, ["data", "keys", "showFirstEmptyOption", "hasError", "notFoundContent", "loading", "disabled"]);

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  return React.createElement(_Select, _extends({}, rest, {
    loading: loading,
    notFoundContent: t(notFoundContent),
    className: "".concat(styles.select, " ").concat(hasError ? styles.selectError : '', " ").concat(disabled ? styles.disabled : ''),
    dropdownClassName: styles.dropdown,
    optionFilterProp: "children",
    getPopupContainer: function getPopupContainer(trigger) {
      return trigger.parentNode;
    },
    suffixIcon: !loading && React.createElement(_Icon, {
      component: DownArrow
    }),
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    disabled: disabled
  }), showFirstEmptyOption && React.createElement(Option, {
    value: "all"
  }, "Ham\u0131s\u0131"), data.map(function (element, index) {
    return React.createElement(Option, {
      key: "".concat(element.id || '').concat(index),
      value: element.id || ''
    }, "".concat(element[keys[0]], " ").concat(element[keys[1]] || ''));
  }));
}, function (prevProps, nextProps) {
  return prevProps.data && prevProps.data.length === nextProps.data && nextProps.data.length && prevProps.value === nextProps.value && prevProps.hasError === nextProps.hasError && !prevProps.notUseMemo;
} // false;
);
ProSelect.propTypes = {
  hasError: PropTypes.bool,
  showSearch: PropTypes.bool,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  onSelect: PropTypes.func,
  data: PropTypes.array,
  keys: PropTypes.array,
  showFirstEmptyOption: PropTypes.bool,
  notFoundContent: PropTypes.string,
  disabled: PropTypes.bool
};