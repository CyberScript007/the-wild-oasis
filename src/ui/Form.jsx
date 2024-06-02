import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.5rem 3.5rem;
      background-color: var(--color-grey-0);
      border-radius: var(--border-radius-sm);
      border: 1px solid var(--color-grey-100);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}

    font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
