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
  padding: 40px 130px;
  gap: 20px;
  border-radius: 50px;
  background-color: #eaeaea;
`;

export const Image = styled.img`
  width: 150px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const NameClub = styled.p`
  font-size: 75px;
  font-weight: 700;
`;

export const EditButton = styled.button`
  width: 150px;
  height: 30px;
  margin-left: 8%;
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
