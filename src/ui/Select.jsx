import styled from "styled-components";

const StyleSelect = styled.select`
  padding: 0.8rem 1rem;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  font-weight: 500;
  border: 0;
  box-shadow: var(--shadow-sm);
  background-color: var(--color-grey-0);
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
`;

function Select({ options, value, onChange, type, props }) {
  return (
    <StyleSelect value={value} onChange={onChange} type={type} {...props}>
      {options.map((option) => (
        <option value={option.values} key={option.values}>
          {option.label}
        </option>
      ))}
    </StyleSelect>
  );
}

export default Select;
