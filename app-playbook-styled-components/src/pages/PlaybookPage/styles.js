import styled from 'styled-components/native';
import { screenHeight, screenWidth } from '../../constants/styles/dimensions';

export const Container = styled.KeyboardAvoidingView`
  background-color: #121212;
  flex: 1;
  height: ${screenHeight}px;
  justify-content: center;
`;

export const InputContainer = styled.View`
  border-color: #e9e9e9;
  border-width: ${screenWidth * 0.003}px;
  border-radius: ${screenWidth * 0.2}px;
  background-color: #f0f0f0;
  margin-top: ${props => props.marginTop}px;
  width: ${screenWidth * 0.84}px;
  align-self: center;
  height: ${screenHeight * 0.065}px;
  padding: 0px ${screenWidth * 0.05}px;
  justify-content: center;
`;

export const Input = styled.TextInput.attrs({
  autoCapitalize: 'none',
  placeholderTextColor: 'gray',
  returnKeyType: 'done',
  clearButtonMode: 'while-editing',
})`
  color: black;
  height: ${screenHeight * 0.065}px;
  font-size: ${screenHeight * 0.018}px;
`;

export const LoginButton = styled.TouchableOpacity`
  margin-top: ${screenHeight * 0.04}px;
  background-color: ${props => (props.disabled ? '#6bbf3995' : '#6bbf39')};
  height: ${screenHeight * 0.055}px;
  width: ${screenWidth * 0.31}px;
  border-radius: ${screenWidth * 0.024}px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const LoginButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  font-size: ${screenHeight * 0.023}px;
  align-self: center;
`;
