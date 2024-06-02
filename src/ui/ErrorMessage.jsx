import styled from "styled-components";

import Heading from "../ui/Heading";

const ErrorContainer = styled.div`
  text-align: center;
`;

function ErrorMessage({ message }) {
  return (
    <ErrorContainer>
      <Heading as="h5">{message}</Heading>
    </ErrorContainer>
  );
}

export default ErrorMessage;
