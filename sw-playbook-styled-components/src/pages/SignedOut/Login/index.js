import { useState } from 'react';

import { Container, InputContainer, Input, LoginButton } from './styles';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function validateInputs() {
    if (user === '' || password === '') {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Login efetuado com sucesso!');
  }

  return (
    <Container>
      <InputContainer marginTop={65}>
        <Input placeholder="Usuário" onChange={e => setUser(e.target.value)} />
      </InputContainer>
      <InputContainer marginTop={1}>
        <Input
          placeholder="Senha"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </InputContainer>
      <LoginButton disabled={validateInputs()} onClick={e => handleSubmit(e)}>
        Entrar
      </LoginButton>
    </Container>
  );
}
