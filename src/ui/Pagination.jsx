import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { PAGE_SIZE } from "../utils/Constants";

const StylePagination = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2.5rem;
`;

const P = styled.td`
  font-size: 1.4rem;
  color: var(--color-grey-900);

  & span {
    font-weight: 600;
    color: var(--color-grey-900);
  }
`;

const ButtonContainer = styled.td`
  display: flex;
  gap: 0.7rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  background-color: transparent;
  color: var(--color-grey-800);
  font-weight: 500;
  text-transform: capitalize;
  border: 0;
  padding: 0.8rem 1rem;
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.3s ease;

  & svg {
    width: 1.9rem;
    height: 1.9rem;
    fill: var(--color-grey-800);
  }

  &:hover:not(:disabled) svg {
    fill: var(--color-grey-0);
  }

  &:hover:not(:disabled) {
    color: var(--color-grey-0);
    background-color: var(--color-brand-600);
  }
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  let currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  const nextPage = function () {
    const next = currentPage === pageCount ? pageCount : currentPage + 1;
    searchParams.set("page", Number(next));
    setSearchParams(searchParams);
  };

  const prevPage = function () {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  };

  return (
    <StylePagination>
      <P>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </P>
      <ButtonContainer>
        <Button onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft />
          <span>previous</span>
        </Button>
        <Button onClick={nextPage} disabled={currentPage === pageCount}>
          <span>next</span>
          <HiChevronRight />
        </Button>
      </ButtonContainer>
    </StylePagination>
  );
}

export default Pagination;
