/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';

import { Notice, Text } from './styles';

export function Notices({ children }) {
  return <Notice>{children}</Notice>;
}

export function TextNotice({ children }) {
  return <Text>{children}</Text>;
}

Notices.propTypes = {
  children: PropTypes.string
};

TextNotice.propTypes = {
  children: PropTypes.string
};
