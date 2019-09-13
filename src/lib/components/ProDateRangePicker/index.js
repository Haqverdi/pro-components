import React, { useState, useEffect } from 'react';
import { DatePicker, Button } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

const dateFormat = 'DD-MM-YYYY';

export function ProDateRangePicker(props) {
  const { showIcon = false, year = false, buttonSize = 'normal', onChangeDate = () => {}, ...rest } = props;
  const [state, setState] = useState({
    startValue: moment().startOf('week'),
    endValue: moment().endOf('week'),
    selected: 'week',
  });
  const { startValue, endValue, selected } = state;

  const { t } = useTranslation();

  function onChange(field, value) {
    setState({
      ...state,
      [field]: value,
    });
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
      selected: 'day',
    });
  }

  function setRangeToWeek() {
    setState({
      startValue: moment().startOf('week'),
      endValue: moment().endOf('week'),
      selected: 'week',
    });
  }

  function setRangeToMonth() {
    setState({
      startValue: moment().startOf('month'),
      endValue: moment().endOf('month'),
      selected: 'month',
    });
  }

  function setRangeToYear() {
    setState({
      startValue: moment().startOf('year'),
      endValue: moment().endOf('year'),
      selected: 'year',
    });
  }

  // send start-end range after state change
  useEffect(() => {
    onChangeDate(startValue, endValue); // moment instances
  }, [endValue, onChangeDate, startValue]);

  return (
    <>
      <div className={styles.range}>
        <DatePicker
          format={dateFormat}
          value={moment(startValue, dateFormat)}
          placeholder="Start"
          onChange={onStartChange}
          suffixIcon={!showIcon && <i />} // null not work
          showToday={false}
          allowClear={false}
          getCalendarContainer={trigger => trigger.parentNode}
          {...rest}
        />
        <DatePicker
          format={dateFormat}
          value={moment(endValue, dateFormat)}
          placeholder="End"
          onChange={onEndChange}
          suffixIcon={!showIcon && <i />}
          allowClear={false}
          showToday={false}
          getCalendarContainer={trigger => trigger.parentNode}
          {...rest}
        />
      </div>
      <div className={styles.rangeButtons}>
        <Button type={selected === 'day' ? 'primary' : ''} onClick={setRangeToDay} size={buttonSize}>
          {t('Day')}
        </Button>
        <Button type={selected === 'week' ? 'primary' : ''} onClick={setRangeToWeek} size={buttonSize}>
          {t('Week')}
        </Button>
        <Button type={selected === 'month' ? 'primary' : ''} onClick={setRangeToMonth} size={buttonSize}>
          {t('Month')}
        </Button>
        {year && (
          <Button type={selected === 'year' ? 'primary' : ''} onClick={setRangeToYear} size={buttonSize}>
            {t('Year')}
          </Button>
        )}
      </div>
    </>
  );
}

ProDateRangePicker.propTypes = {
  onChangeDate: PropTypes.func,
  buttonSize: PropTypes.string,
  showIcon: PropTypes.bool,
  year: PropTypes.bool,
};
