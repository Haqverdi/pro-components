import React from 'react';
import { Table as AntTable, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

export function Table({ footer, ...rest }) {
  return (
    <div>
      <AntTable rowClassName={styles.row} className={styles.table} pagination={false} bordered {...rest} />
      {footer ? <div className={styles.footer}>{footer}</div> : null}
    </div>
  );
}
export function TableFooter({ mebleg, title = 'Total' }) {
  const { t } = useTranslation();

  return (
    <Row style={{ fontWeight: 500 }}>
      <Col span={12}>{t(title)}:</Col>
      <Col span={12} style={{ textAlign: 'right' }}>
        {mebleg}
      </Col>
    </Row>
  );
}

Table.propTypes = {
  footer: PropTypes.element,
};

TableFooter.propTypes = {
  mebleg: PropTypes.any,
  title: PropTypes.string,
};
