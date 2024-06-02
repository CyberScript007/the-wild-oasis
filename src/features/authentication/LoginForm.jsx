import { useState } from "react";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormVertical from "../../ui/FormVertical";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";

import { useLogIn } from "./useLoginIn";
import styled from "styled-components";

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
`;

function LoginForm() {
  const [email, setEmail] = useState("shakrullahi@gmail.com");
  const [password, setPassword] = useState("123456789");
  const { logIn, isLoading } = useLogIn();

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!email || !password) return;

    logIn(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );

    console.log("hello");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormVertical label="Email address">
        <Input
          type="email"
          required
          autoComplete="username"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormVertical>
      <FormVertical label="Password">
        <Input
          type="password"
          required
          autoComplete="current-password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormVertical>

      <FormVertical>
        <Button size="large" disabled={isLoading}>
          {" "}
          {isLoading ? (
            <Span>
              <SpinnerMini /> Log in
            </Span>
          ) : (
            "Log in"
          )}
        </Button>
      </FormVertical>
    </Form>
  );
}

export default LoginForm;
