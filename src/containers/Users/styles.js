import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EditClub = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 6%;
  width: 90%;
  height: 400px;
  padding: 20px 80px;
  gap: 20px;
  border-radius: 50px;
  background-color: #eaeaea;

  .box-image {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 50%;
    width: 20%;
    height: 60%;
  }

  .box-name {
    width: 60%;
  }
`;

export const Image = styled.img`
  width: 150px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const NameClub = styled.p`
  font-size: 65px;
  font-weight: 700;
`;

export const EditButton = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 12px;
  background-color: #7e7e7e;
  color: white;
  border: none;
  outline: none;
  font-family: 'Changa One';
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-style: italic;
  color: gray;
  font-weight: 100;
  margin-top: 30px;
`;
