import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import { useTranslation } from 'react-i18next';

export function ProEmpty({ description = 'Not Found', ...rest }) {
  const { t } = useTranslation();

  return <Empty {...rest} description={t(description)} />;
}

ProEmpty.propTypes = {
  description: PropTypes.string,
};
