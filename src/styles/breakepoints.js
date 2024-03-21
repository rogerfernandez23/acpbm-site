/* eslint-disable import/prefer-default-export */
const size = {
  mn: '0px',
  small: '430px',
  smf: '0px',
  smaller: '740px',
  average: '860px',
  in: '0px',
  bg: '0px',
  bigger: '0px'
};

const breakepoints = {
  mn: `(max-width: ${size.mn})`,
  z: `(max-width: ${size.small})`,
  smf: `(max-width: ${size.smf})`,
  s: `(max-width: ${size.smaller})`,
  a: `(max-width: ${size.average})`,
  in: `(max-width: ${size.in})`,
  bg: `(max-width: ${size.bg})`,
  b: `(max-width: ${size.bigger})`
};

export default breakepoints;
