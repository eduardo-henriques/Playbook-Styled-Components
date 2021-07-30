import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';

import {
  Container,
  InputContainer,
  Input,
  LoginButton,
  LoginButtonText,
} from './styles';
import { screenHeight } from '../../constants/styles/dimensions';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function validateInputs() {
    if (user === '' || password === '') {
      return true;
    } else if (loading) {
      return true;
    } else {
      return false;
    }
  }

  function sendFlashMessage() {
    setLoading(true);
    showMessage({
      message: 'Login efetuado com sucesso',
      description: `Bem vindo ao app, ${user}!`,
      type: 'success',
      icon: 'success',
      duration: 6000,
      onPress: () => {
        setLoading(false);
      },
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container
        behavior="height"
        keyboardVerticalOffset={
          Platform.OS === 'ios' ? -screenHeight * 0.3 : -screenHeight * 0.15
        }
      >
        <InputContainer marginTop={screenHeight * 0.04}>
          <Input
            placeholder="Usuário"
            value={user}
            onChangeText={text => setUser(text)}
          />
        </InputContainer>
        <InputContainer marginTop={screenHeight * 0.025}>
          <Input
            placeholder="Senha"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </InputContainer>
        <LoginButton
          onPress={() => sendFlashMessage()}
          disabled={validateInputs()}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <LoginButtonText>Entrar</LoginButtonText>
          )}
        </LoginButton>
      </Container>
    </TouchableWithoutFeedback>
  );
}
