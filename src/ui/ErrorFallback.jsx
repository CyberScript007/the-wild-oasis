import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import GlobalStyle from "../styles/GlobalStyle";

const StyleFallbackErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  background-color: var(--color-grey-100);
`;

const StyleFallbackError = styled.div`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 6rem;
  text-align: center;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

function ErrorFallback({ resetErrorBoundary }) {
  return (
    <>
      <GlobalStyle />
      <StyleFallbackErrorContainer>
        <StyleFallbackError>
          <Heading as="h3">
            The page you are looking for could not be found 😥
          </Heading>
          <ButtonContainer>
            <Button onClick={resetErrorBoundary}>&larr; Go back</Button>
          </ButtonContainer>
        </StyleFallbackError>
      </StyleFallbackErrorContainer>
    </>
  );
}

export default ErrorFallback;
