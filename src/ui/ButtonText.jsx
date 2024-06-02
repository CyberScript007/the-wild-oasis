import styled from "styled-components";

const ButtonText = styled.button`
  border: 0;
  height: 2.5rem;
  background-color: transparent;
  font-weight: 500;
  color: var(--color-brand-600);
  font-size: 1.5rem;
  padding: 0 0.6rem;
  border-radius: var(--border-radius-sm);
  text-align: center;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;

export default ButtonText;
