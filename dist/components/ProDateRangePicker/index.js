import "antd/lib/button/style";
import _Button from "antd/lib/button";
import "antd/lib/date-picker/style";
import _DatePicker from "antd/lib/date-picker";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
var dateFormat = 'DD-MM-YYYY';
export function ProDateRangePicker(props) {
  var _props$showIcon = props.showIcon,
      showIcon = _props$showIcon === void 0 ? false : _props$showIcon,
      _props$year = props.year,
      year = _props$year === void 0 ? false : _props$year,
      _props$buttonSize = props.buttonSize,
      buttonSize = _props$buttonSize === void 0 ? 'normal' : _props$buttonSize,
      _props$onChangeDate = props.onChangeDate,
      onChangeDate = _props$onChangeDate === void 0 ? function () {} : _props$onChangeDate,
      rest = _objectWithoutProperties(props, ["showIcon", "year", "buttonSize", "onChangeDate"]);

  var _useState = useState({
    startValue: moment().startOf('week'),
    endValue: moment().endOf('week'),
    selected: 'week'
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var startValue = state.startValue,
      endValue = state.endValue,
      selected = state.selected;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  function onChange(field, value) {
    setState(_objectSpread({}, state, _defineProperty({}, field, value)));
  }

  function onStartChange(value) {
    onChange('startValue', value);
  }

  function onEndChange(value) {
    onChange('endValue', value);
  }

  function setRangeToDay() {
    setState({
      startValue: moment(),
      endValue: moment(),
      selected: 'day'
    });
  }

  function setRangeToWeek() {
    setState({
      startValue: moment().startOf('week'),
      endValue: moment().endOf('week'),
      selected: 'week'
    });
  }

  function setRangeToMonth() {
    setState({
      startValue: moment().startOf('month'),
      endValue: moment().endOf('month'),
      selected: 'month'
    });
  }

  function setRangeToYear() {
    setState({
      startValue: moment().startOf('year'),
      endValue: moment().endOf('year'),
      selected: 'year'
    });
  } // send start-end range after state change


  useEffect(function () {
    onChangeDate(startValue, endValue); // moment instances
  }, [endValue, onChangeDate, startValue]);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: styles.range
  }, React.createElement(_DatePicker, _extends({
    format: dateFormat,
    value: moment(startValue, dateFormat),
    placeholder: "Start",
    onChange: onStartChange,
    suffixIcon: !showIcon && React.createElement("i", null) // null not work
    ,
    showToday: false,
    allowClear: false,
    getCalendarContainer: function getCalendarContainer(trigger) {
      return trigger.parentNode;
    }
  }, rest)), React.createElement(_DatePicker, _extends({
    format: dateFormat,
    value: moment(endValue, dateFormat),
    placeholder: "End",
    onChange: onEndChange,
    suffixIcon: !showIcon && React.createElement("i", null),
    allowClear: false,
    showToday: false,
    getCalendarContainer: function getCalendarContainer(trigger) {
      return trigger.parentNode;
    }
  }, rest))), React.createElement("div", {
    className: styles.rangeButtons
  }, React.createElement(_Button, {
    type: selected === 'day' ? 'primary' : '',
    onClick: setRangeToDay,
    size: buttonSize
  }, t('Day')), React.createElement(_Button, {
    type: selected === 'week' ? 'primary' : '',
    onClick: setRangeToWeek,
    size: buttonSize
  }, t('Week')), React.createElement(_Button, {
    type: selected === 'month' ? 'primary' : '',
    onClick: setRangeToMonth,
    size: buttonSize
  }, t('Month')), year && React.createElement(_Button, {
    type: selected === 'year' ? 'primary' : '',
    onClick: setRangeToYear,
    size: buttonSize
  }, t('Year'))));
}
ProDateRangePicker.propTypes = {
  onChangeDate: PropTypes.func,
  buttonSize: PropTypes.string,
  showIcon: PropTypes.bool,
  year: PropTypes.bool
};