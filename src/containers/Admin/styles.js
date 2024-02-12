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
  gap: 80px;
  background-color: #f9f9f9;
  border-radius: 75px;
  width: 80%;
  height: 500px;
  margin-top: 30px;
`;

export const Create = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  border-radius: 50px;
  width: 25%;
  height: 450px;
`;

export const Edit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  border-radius: 50px;
  width: 25%;
  height: 450px;
`;

export const Delete = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  border-radius: 50px;
  width: 25%;
  height: 450px;
`;

export const ImgCreate = styled.img`
  width: 180px;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
`;

export const ImgEdit = styled.img`
  width: 190px;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
`;

export const ImgDelete = styled.img`
  width: 190px;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
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

  &:hover {
    opacity: 0.8;
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

  &:hover {
    opacity: 0.8;
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

  &:hover {
    opacity: 0.8;
  }
`;
