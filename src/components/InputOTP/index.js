/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';

import { Container } from './styles';

function InputOTP({ tokenValue }) {
  const [otp, setOtp] = useState('');

  const changeOtp = value => {
    setOtp(value);
    tokenValue(value);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      {windowWidth >= 650 ? (
        <OtpInput
          value={otp}
          onChange={changeOtp}
          numInputs={6}
          inputStyle={{
            width: '4rem',
            height: '4rem',
            backgroundColor: '#141414',
            borderRadius: '10px',
            border: 'none',
            fontFamily: 'Changa One',
            fontSize: '22px',
            color: 'white',
            textTransform: 'uppercase'
          }}
          renderSeparator={
            <span
              style={{
                color: 'white',
                margin: '2px 10px 0px 10px',
                opacity: '0.3'
              }}
            >
              ●
            </span>
          }
          renderInput={props => <input {...props} />}
        />
      ) : (
        <OtpInput
          value={otp}
          onChange={changeOtp}
          numInputs={6}
          inputStyle={{
            width: '3rem',
            height: '3rem',
            backgroundColor: '#141414',
            borderRadius: '10px',
            border: 'none',
            fontFamily: 'Changa One',
            fontSize: '22px',
            color: 'white',
            textTransform: 'uppercase'
          }}
          renderSeparator={<span>--</span>}
          renderInput={props => <input {...props} />}
        />
      )}
    </Container>
  );
}

export default InputOTP;

InputOTP.propTypes = {
  tokenValue: PropTypes.func.isRequired
};
