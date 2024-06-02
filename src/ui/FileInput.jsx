import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  border-radius: var(--border-radius-sm);
  &::file-selector-button {
    font-family: inherit;
    font-weight: 500;
    background-color: var(--color-brand-600);
    color: var(--color-grey-0);
    padding: 0.8rem 1rem;
    border: none;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;

export default FileInput;
