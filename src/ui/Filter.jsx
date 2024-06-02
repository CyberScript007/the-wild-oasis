import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyleFilter = styled.div`
  background-color: var(--color-grey-0);
  padding: 0.4rem 0.5rem;
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Button = styled.button`
  border: 0;
  color: var(--color-grey-900);
  background-color: var(--color-grey-0);
  padding: 0.5rem 0.8rem;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  font-weight: 500;
  transition: all 0.3s ease;

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-brand-600);
      color: #fff;
    `}

  &:hover {
    background-color: var(--color-brand-600);
    color: #fff;
  }
`;

function Filter({ field, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = function (value) {
    searchParams.get(field) || options[0].values;

    if (searchParams.get("page")) searchParams.set("page", 1);

    searchParams.set(field, value);

    setSearchParams(searchParams);
  };

  const activeValue = searchParams.get(field) || options[0].values;

  return (
    <StyleFilter>
      {options.map((option) => (
        <Button
          onClick={() => handleClick(option.values)}
          key={option.values}
          $active={activeValue === option.values}
          disabled={activeValue === option.values}
        >
          {option.label}
        </Button>
      ))}

      {/* <Button onClick={() => handleClick("no-discount")}>No discount</Button>
      <Button onClick={() => handleClick("with-discount")}>
        with discount
      </Button> */}
    </StyleFilter>
  );
}

export default Filter;
