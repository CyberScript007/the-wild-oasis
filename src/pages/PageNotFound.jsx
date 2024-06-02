import styled from "styled-components";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useMoveBack } from "../hooks/useMoveBack";

const StylePageNotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  background-color: var(--color-grey-100);
`;

const StylePageNotFound = styled.div`
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

function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <StylePageNotFoundContainer>
      <StylePageNotFound>
        <Heading as="h3">
          The page you are looking for could not be found 😥
        </Heading>
        <ButtonContainer>
          <Button onClick={moveBack}>&larr; Go back</Button>
        </ButtonContainer>
      </StylePageNotFound>
    </StylePageNotFoundContainer>
  );
}

export default PageNotFound;
