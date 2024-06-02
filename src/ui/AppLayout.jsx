import styled from "styled-components";
import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import Header from "./Header";

const StyleAppLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 27rem 1fr;
  grid-template-rows: 6rem 1fr;
  overflow: hidden;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  grid-column: 2 / -1;
  grid-row: 2 / 3;
  padding: 5rem 4rem;
  overflow-y: auto;
`;

function AppLayout() {
  return (
    <StyleAppLayout>
      <Header />
      <SideBar />
      <Main>{<Outlet />}</Main>
    </StyleAppLayout>
  );
}

export default AppLayout;
