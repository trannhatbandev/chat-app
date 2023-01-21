import styled from 'styled-components';

export const InputField = styled.input`
  font-family: 'Inter';
  outline: none;
  border: none;
  background-color: inherit;
  color: #fff;
  font-size: 18px;
  width: 100%;
  padding: 0;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  color: #fff;
  outline: none;
  font-family: 'Inter';
  font-size: 16px;
  border-radius: 10px;
  padding: 25px 0;
  border: none;
  background-color: #2b09ff;
  font-weight: 500;
  transition: 250ms backgroud-color ease;
  &:hover {
    cursor: pointer;
    background-color: #3415ff;
  }
  &:active {
    background-color: #3a1cff;
  }
`;

export const Page = styled.div`
  background-color: #1a1a1a;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
