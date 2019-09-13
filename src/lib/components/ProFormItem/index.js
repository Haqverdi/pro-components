import React from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

export function ProFormItem({ children, validateStatus, help = validateStatus ? 'Required' : '', ...rest }) {
  const { t } = useTranslation();

  return (
    <Form.Item {...rest} colon={false} validateStatus={validateStatus} help={t(help)} className={styles.formItem}>
      {children}
    </Form.Item>
  );
}

ProFormItem.propTypes = {
  children: PropTypes.any,
  validateStatus: PropTypes.string,
  help: PropTypes.string,
};
