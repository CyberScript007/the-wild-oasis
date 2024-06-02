import styled, { css } from "styled-components";

const Row = styled.section`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;

      gap: 0.5rem;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.5rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
