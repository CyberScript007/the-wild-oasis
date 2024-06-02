import styled from "styled-components";

const StyleFormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 2.5rem;
  font-size: 1.4rem;
  padding: 1rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-200);
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.p`
  color: var(--color-red-700);
  font-weight: 500;
`;

function FormRow({ label, children, errors }) {
  const inputId = children.props.id;
  return (
    <StyleFormRow>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      {children}
      {errors?.[inputId] && <Error>{errors?.[inputId].message}</Error>}
    </StyleFormRow>
  );
}

export default FormRow;
