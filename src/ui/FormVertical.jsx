import styled from "styled-components";

const StyleFormVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 1.4rem;
`;

function FormVertical({ label, children, error }) {
  return (
    <StyleFormVertical>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <span>{error.message}</span>}
    </StyleFormVertical>
  );
}

export default FormVertical;
