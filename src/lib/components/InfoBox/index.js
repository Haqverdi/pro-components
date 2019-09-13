import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

export function InfoBoxItem({ label, text, children }) {
  const { t } = useTranslation();
  return (
    <div className={styles.viewOption}>
      <div className={styles.label}>{label}</div>
      <div>{text || t('Not Found')}</div>
      {children && <div>{children}</div>}
    </div>
  );
}

export function InfoBox({ title, children }) {
  return (
    <div className={styles.infoBox}>
      <div className={styles.content}>
        <div className={styles.header}>{title}</div>
        {children && <div className={styles.body}>{children}</div>}
      </div>
    </div>
  );
}

InfoBox.propTypes = {
  title: PropTypes.string,
  children(props, propName, componentName) {
    const prop = props[propName];
    let error = null;
    React.Children.forEach(prop, function(child) {
      if (child.type !== InfoBoxItem) {
        error = new Error(`${componentName} children should be of type InfoBoxItem.`);
      }
    });
    return error;
  },
};

InfoBoxItem.propTypes = {
  label: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.any,
};

InfoBoxItem.defaultProps = {
  text: 'Not Found',
};
