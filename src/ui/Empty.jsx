import styled from "styled-components";

const P = styled.p`
  font-size: 1.7rem;
  font-weight: 500;
  background-color: var(--color-grey-0);
  padding: 1rem 2.5rem;
  border-radius: var(--border-radius-sm);
`;

function Empty({ resourceName }) {
  return <P>No {resourceName} data</P>;
}

export default Empty;
