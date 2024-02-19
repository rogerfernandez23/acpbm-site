/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: #f9f9f9;
  border-radius: 75px;
  width: 90%;
  height: 500px;
  margin-top: 30px;
`;
export const Manager = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  border-radius: 50px;
  width: 20%;
  height: 425px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Create = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  border-radius: 50px;
  width: 20%;
  height: 425px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Edit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  border-radius: 50px;
  width: 20%;
  height: 425px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Delete = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  border-radius: 50px;
  width: 20%;
  height: 425px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImgManager = styled.img`
  width: 180px;
  cursor: pointer;
`;

export const ImgCreate = styled.img`
  width: 180px;
  cursor: pointer;
`;

export const ImgEdit = styled.img`
  width: 190px;
  cursor: pointer;
`;

export const ImgDelete = styled.img`
  width: 190px;
  cursor: pointer;
`;

export const ManageButton = styled.button`
  width: 200px;
  height: 30px;
  margin-top: 30%;
  border-radius: 14px;
  background-color: #b22323;
  color: white;
  border: none;
  outline: none;
  font-family: 'Changa One';
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CreateButton = styled.button`
  width: 180px;
  height: 30px;
  margin-top: 30%;
  border-radius: 14px;
  background-color: #b22323;
  color: white;
  border: none;
  outline: none;
  font-family: 'Changa One';
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const EditButton = styled.button`
  width: 180px;
  height: 30px;
  margin-top: 30%;
  border-radius: 14px;
  background-color: #b22323;
  color: white;
  border: none;
  outline: none;
  font-family: 'Changa One';
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const DeleteButton = styled.button`
  width: 180px;
  height: 30px;
  margin-top: 30%;
  border-radius: 14px;
  background-color: #b22323;
  color: white;
  border: none;
  outline: none;
  font-family: 'Changa One';
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-style: italic;
  color: gray;
  font-weight: 100;
  margin-top: 12px;
`;
