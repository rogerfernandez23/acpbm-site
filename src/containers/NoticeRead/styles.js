import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .container-notice {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container-text {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 50px;
  }

  .container-data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
    margin-bottom: 5px;

    p {
      font-size: 12px;
      font-weight: 400;
    }
  }

  .image-share {
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  .notice-image {
    width: 60%;
  }

  hr {
    width: 60%;
  }
`;

export const Nav = styled.p`
  display: flex;
  flex-direction: column;
`;
