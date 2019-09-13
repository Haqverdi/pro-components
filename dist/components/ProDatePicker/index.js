import "antd/lib/date-picker/style";
import _DatePicker from "antd/lib/date-picker";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import az from './locale.json';
import styles from './styles.module.scss';
export function ProDatePicker(props) {
  return React.createElement(_DatePicker, _extends({
    size: "large",
    suffixIcon: React.createElement("i", null) // hide calendar icon
    ,
    allowClear: false,
    showToday: false,
    className: styles.datePicker,
    dropdownClassName: styles.dropdownDatePicker,
    getCalendarContainer: function getCalendarContainer(trigger) {
      return trigger.parentNode;
    },
    format: "DD-MM-YYYY",
    locale: az
  }, props));
}