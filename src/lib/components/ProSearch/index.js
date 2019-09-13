import React from 'react';
import PropType from 'prop-types';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

export function ProSearch(props) {
  const { onSearch, label, placeholder, ...rest } = props;

  const { t } = useTranslation();

  return (
    <div className={styles.search}>
      <label htmlFor="search">{t(label)}</label>
      <Input.Search
        id="search"
        placeholder={t(placeholder)}
        onSearch={onSearch}
        {...rest}
      />
    </div>
  );
}

ProSearch.propTypes = {
  onSearch: PropType.func,
  placeholder: PropType.string,
  label: PropType.string,
};

ProSearch.defaultProps = {
  onSearch: value => console.log(value),
  placeholder: 'search',
  label: 'Search',
};
