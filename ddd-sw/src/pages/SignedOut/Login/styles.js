import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #aaa;
  height: 70%;
  border-radius: 10px;
  width: 30%;
  min-width: 100px;
  max-width: 1920px;
  min-height: 248px;
  max-height: 1080px;
  align-self: center;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  background-color: #aaa;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 20%;
  padding: 0px 5%;
  justify-content: center;
  margin-top: ${props => props.marginTop}px;
  align-self: center;
`;

export const Input = styled.input`
  display: flex;
  flex-wrap: nowrap;
  border-radius: 3px;
  align-self: center;
  height: 45%;
  width: 70%;
  border-radius: 10px;
  padding-left: 8px;
  font-size: 95%;
  &:focus {
    border-width: 2px;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  margin-top: 15%;
  background-color: ${props => (props.disabled ? '#6bbf3995' : '#6bbf39')};
  height: 7.5%;
  width: 25%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
  color: #121212;
  font-weight: bold;
  font-size: 98%;
  align-self: center;

  &:hover {
    color: ${props => (props.disabled ? 'black' : 'white')};
    background-color: ${props => (props.disabled ? '#6bbf3995' : '#6bbf39')};
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  }
`;

export const LoginButtonText = styled.p``;
