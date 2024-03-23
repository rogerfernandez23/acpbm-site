/* eslint-disable import/prefer-default-export */
const size = {
  mn: '0px',
  small: '430px',
  medium: '580px',
  smaller: '740px',
  average: '860px',
  intermediary: '960px',
  large: '1000px',
  bigger: '1115px'
};

const breakepoints = {
  mn: `(max-width: ${size.mn})`,
  z: `(max-width: ${size.small})`,
  m: `(max-width: ${size.medium})`,
  s: `(max-width: ${size.smaller})`,
  a: `(max-width: ${size.average})`,
  i: `(max-width: ${size.intermediary})`,
  l: `(max-width: ${size.large})`,
  b: `(max-width: ${size.bigger})`
};

export default breakepoints;
