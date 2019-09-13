import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Icon } from 'antd';
import { ReactComponent as DownArrow } from './downarrow.svg';

import styles from './styles.module.scss';

const { Panel } = Collapse;

export function ProPanel({ children, header, key, ...rest }) {
  return (
    <Panel {...{ header, key }} {...rest} className={styles.header}>
      {children}
    </Panel>
  );
}

export function ProCollapse({ children, ...rest }) {
  return (
    <Collapse
      {...rest}
      expandIconPosition="right"
      bordered={false}
      expandIcon={({ isActive }) => (
        <Icon
          // type="down"
          component={DownArrow}
          style={{ fontSize: '10px' }}
          rotate={isActive ? 180 : 0}
        />
      )}
      className={styles.collapse_override}
    >
      {children}
    </Collapse>
  );
}

ProPanel.propTypes = {
  children: PropTypes.any,
  header: PropTypes.string,
  key: PropTypes.string,
};

ProCollapse.propTypes = {
  children: PropTypes.any,
};
