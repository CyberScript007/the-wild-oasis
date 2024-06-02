import styled from "styled-components";

const ButtonIcon = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border: 0;
  border-radius: var(--border-radius-sm);
  background-color: transparent;

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    stroke: var(--color-brand-600);
  }

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

export default ButtonIcon;
