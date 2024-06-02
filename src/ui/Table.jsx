import { createContext, useContext } from "react";
import styled from "styled-components";

const StyleTable = styled.table`
  border-collapse: collapse;
  border: 1px solid var(--color-grey-200);
`;

const StyleTableHeader = styled.thead`
  text-align: left;
`;

const CommonRow = styled.tr`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  align-items: center;
  gap: 2rem;
`;

const StyleTableRow = styled(CommonRow)`
  padding: 1.5rem 2.5rem;
`;

const StyleTableBody = styled.tbody`
  background-color: var(--color-grey-0);
`;

const StyleTableHead = styled.th`
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-grey-800);
  border-radius: var(--border-radius-sm);
`;

const StyleTableData = styled.td`
  font-size: 1.4rem;
  width: 100%;
  color: var(--color-grey-600);
  border-radius: var(--border-radius-sm);
`;

const StyleTableFooter = styled.tfoot`
  background-color: var(--color-grey-100);
`;

const TableContext = createContext();

function Table({ children, $columns }) {
  return (
    <TableContext.Provider value={{ $columns }}>
      <StyleTable>{children}</StyleTable>
    </TableContext.Provider>
  );
}

const TableHeader = function ({ children }) {
  return <StyleTableHeader>{children}</StyleTableHeader>;
};

const TableRow = function ({ children }) {
  const { $columns } = useContext(TableContext);

  return <StyleTableRow $columns={$columns}>{children}</StyleTableRow>;
};

const TableHead = function ({ children }) {
  return <StyleTableHead>{children}</StyleTableHead>;
};

const TableBody = function ({ children }) {
  return <StyleTableBody>{children}</StyleTableBody>;
};

const TableData = function ({ children }) {
  return <StyleTableData>{children}</StyleTableData>;
};

const TableRender = function ({ data, render }) {
  return data.map(render);
};

const TableFooter = function ({ children }) {
  return <StyleTableFooter>{children}</StyleTableFooter>;
};

Table.TableHeader = TableHeader;
Table.TableRow = TableRow;
Table.TableHead = TableHead;
Table.TableBody = TableBody;
Table.TableData = TableData;
Table.TableRender = TableRender;
Table.TableFooter = TableFooter;

export default Table;
