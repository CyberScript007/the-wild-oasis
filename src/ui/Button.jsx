import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.8rem 1.6rem;
  `,
  medium: css`
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1rem 2rem;
  `,
  large: css`
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
  `,
};

const variations = {
  primary: css`
    color: #fff;
    background-color: var(--color-brand-600);
    text-align: center;

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    border: 1px solid var(--color-grey-300);
    border-radius: var(--border-radius-sm);
    color: #fff);
    background-color: transparent;

    &:hover {
      background-color: var(--color-grey-100);
    }
  `,
  tertiary: css`
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);
    border-radius: var(--border-radius-sm);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,

  danger: css`
    background-color: var(--color-red-700);
    color: #fff;

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border-radius: var(--border-radius-sm);
  border: 0;

  ${(props) => sizes[props.$size]}

  ${(props) => variations[props.$variation]}
`;

Button.defaultProps = {
  $size: "medium",
  $variation: "primary",
};

export default Button;
