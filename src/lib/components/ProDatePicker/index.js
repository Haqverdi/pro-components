import React from 'react';
import { DatePicker } from 'antd';
import az from './locale.json';
import styles from './styles.module.scss';

export function ProDatePicker(props) {
  return (
    <DatePicker
      size="large"
      suffixIcon={<i />} // hide calendar icon
      allowClear={false}
      showToday={false}
      className={styles.datePicker}
      dropdownClassName={styles.dropdownDatePicker}
      getCalendarContainer={trigger => trigger.parentNode}
      format="DD-MM-YYYY"
      locale={az}
      {...props}
    />
  );
}
