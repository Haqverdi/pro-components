import "antd/lib/popover/style";
import _Popover from "antd/lib/popover";
import React from 'react';
import PropTypes from 'prop-types';
import { GoKebabVertical } from 'react-icons/go';
import styles from './styles.module.scss';
export function PopoverAndDots(_ref) {
  var Content = _ref.content;
  return React.createElement(_Popover, {
    placement: "leftTop",
    content: React.createElement(Content, null),
    trigger: "focus" // trigger="click"
    // visible={visible}
    // onClick={toggle}
    // onBlur={close}
    ,
    getPopupContainer: function getPopupContainer(trigger) {
      return trigger.parentNode.parentNode;
    }
  }, React.createElement("button", {
    type: "button",
    className: styles.dots,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, React.createElement(GoKebabVertical, null)));
}
PopoverAndDots.displayName = 'PopoverAndDots';
PopoverAndDots.propTypes = {
  content: PropTypes.func
};
PopoverAndDots.defaultProps = {
  content: function content() {
    return null;
  }
};