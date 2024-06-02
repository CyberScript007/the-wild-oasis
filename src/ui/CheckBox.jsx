import styled from "styled-components";

const StyleCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Input = styled.input`
  width: 2.5rem;
  height: 2.5rem;

  &:not(:disabled):checked {
    outline: 2px solid var(--color-brand-600);
    outline-offset: 3px;
    accent-color: var(--color-brand-600);
  }

  &:focus {
    outline: none;
    outline-offset: 0px;
  }
`;

const Label = styled.label`
  font-size: 1.7rem;
  color: var(--color-grey-800);
`;

function CheckBox({ children, check, id, onChange, disabled }) {
  return (
    <StyleCheckBox>
      <Input
        type="checkbox"
        checked={check}
        id={id}
        onChange={onChange}
        disabled={disabled}
      />
      <Label htmlFor={id}>{children}</Label>
    </StyleCheckBox>
  );
}

export default CheckBox;
