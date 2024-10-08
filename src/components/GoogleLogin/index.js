import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';

import { useNavigates } from '../../constants/navigates';
import { useUser } from '../../hooks/UserContext';
import api from '../../services/api';
import showMessage from './swalConfig';

function GoogleLoginRender() {
  const { toUsers, toAdmin, toErrror } = useNavigates();
  const { putUserData } = useUser();
  const clientID =
    '984781473130-n4aclf87adevrj0q6r6077l5okv4fa4r.apps.googleusercontent.com';

  useEffect(() => {
    const login = () => {
      gapi.auth2.init({
        clientId: clientID
      });
    };

    gapi.load('client:auth2', login);
  }, []);

  const onSuccess = async response => {
    const dataRequest = await api.post(
      'login/google',
      {
        name: response.profileObj.name,
        email: response.profileObj.email,
        idGoogle: response.profileObj.googleId
      },
      { validateStatus: () => true }
    );

    const { data } = dataRequest;
    const { status } = dataRequest;

    showMessage(status);

    if (status === 200 || status === 201) {
      setTimeout(() => {
        if (data.admin) {
          toAdmin();
          putUserData(data);
        } else if (!data.club_id) {
          toErrror();
        } else {
          toUsers();
          putUserData(data);
        }
      }, 3000);
    }
  };

  const onFailure = () => {
    showMessage();
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_policy"
        render={renderProps => (
          <button
            type="button"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            style={{
              width: '260px',
              justifyContent: 'center',
              color: 'rgba(0, 0, 0, 100)',
              borderRadius: '16px',
              backgroundColor: 'rgb(255, 255, 255)',
              display: 'inline-flex',
              alignItems: 'center',
              boxShadow:
                'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px',
              padding: '0px',
              border: '1px solid transparent',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: 'Roboto, sans-serif',
              cursor: 'pointer'
            }}
          >
            <div
              style={{
                marginRight: '10px',
                backgroundColor: 'rgb(255, 255, 255)',
                padding: '10px',
                borderRadius: '2px'
              }}
            >
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <g fill="#000" fillRule="evenodd">
                  <path
                    d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                    fill="#EA4335"
                  />
                  <path
                    d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                    fill="#4285F4"
                  />
                  <path
                    d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                    fill="#34A853"
                  />
                  <path fill="none" d="M0 0h18v18H0z" />
                </g>
              </svg>
            </div>
            <span style={{ padding: '10px 10px 10px 0px', fontWeight: 500 }}>
              Continuar com Google
            </span>
          </button>
        )}
      >
        Continuar com Google
      </GoogleLogin>
    </div>
  );
}

export default GoogleLoginRender;
