import styled from "styled-components";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Heading from "./Heading";
import Row from "./Row";

const StyleConfirmation = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const P = styled.p`
  font-size: 1.6rem;
`;

function Confirmation({ resourcesName, onCloseModal, onClick }) {
  return (
    <StyleConfirmation>
      <Heading as="h5">Delete {resourcesName}</Heading>
      <P>
        Are you sure you want to delete this {resourcesName} permanently? This
        action cannot be undone
      </P>

      <ButtonGroup>
        <Button $size="medium" $variation="secondary" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button $size="medium" $variation="danger" onClick={onClick}>
          Delete
        </Button>
      </ButtonGroup>
    </StyleConfirmation>
  );
}

export default Confirmation;
