/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import { Select, Icon } from 'antd';
import { useTranslation } from 'react-i18next';

import { ReactComponent as DownArrow } from './downarrow.svg';

import styles from './styles.module.scss';

const { Option } = Select;

//
export const ProSelect = React.memo(
  function ProSelect(props) {
    const {
      data = [],
      keys = ['name'],
      showFirstEmptyOption = false,
      hasError = false,
      notFoundContent = 'No Found',
      loading = false,
      disabled = false,
      ...rest
    } = props;

    const { t } = useTranslation();

    return (
      <Select
        {...rest}
        loading={loading}
        notFoundContent={t(notFoundContent)}
        className={`${styles.select} ${hasError ? styles.selectError : ''} ${disabled ? styles.disabled : ''}`}
        dropdownClassName={styles.dropdown}
        optionFilterProp="children"
        getPopupContainer={trigger => trigger.parentNode}
        suffixIcon={!loading && <Icon component={DownArrow} />}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        disabled={disabled}
      >
        {showFirstEmptyOption && <Option value="all">Hamısı</Option>}
        {data.map((element, index) => (
          <Option key={`${element.id || ''}${index}`} value={element.id || ''}>
            {`${element[keys[0]]} ${element[keys[1]] || ''}`}
          </Option>
        ))}
      </Select>
    );
  },
  (prevProps, nextProps) =>
    prevProps.data &&
    prevProps.data.length === nextProps.data &&
    nextProps.data.length &&
    prevProps.value === nextProps.value &&
    prevProps.hasError === nextProps.hasError &&
    !prevProps.notUseMemo
  // false;
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
  disabled: PropTypes.bool,
};
