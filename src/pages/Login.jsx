import styled from "styled-components";

import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const StyleLogin = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  justify-content: center;
  align-content: center;
  gap: 3rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <StyleLogin>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </StyleLogin>
  );
}

export default Login;
