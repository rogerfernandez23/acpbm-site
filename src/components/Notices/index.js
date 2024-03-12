/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';

import { Notice, Text, SubText } from './styles';

export function Notices({ children }) {
  return <Notice>{children}</Notice>;
}

export function TextNotice({ children }) {
  return <Text>{children}</Text>;
}

export function TextSub({ children }) {
  return <SubText>{children}</SubText>;
}

// export function ImageNotice({ children }) {
//   return <Image>{children}</Image>;
// }

Notices.propTypes = {
  children: PropTypes.string
};

TextNotice.propTypes = {
  children: PropTypes.string
};

TextSub.propTypes = {
  children: PropTypes.string
};

// ImageNotice.propTypes = {
//   children: PropTypes.object
// };
