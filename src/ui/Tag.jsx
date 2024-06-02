import styled from "styled-components";

const Tag = styled.span`
  width: fit-content;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);
  border-radius: 5rem;
  font-size: 1.1rem;
`;

export default Tag;
