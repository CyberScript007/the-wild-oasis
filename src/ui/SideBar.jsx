import styled from "styled-components";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Uploader from "../data/Uploader";

const StyleSideBar = styled.aside`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  border-right: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function SideBar() {
  return (
    <StyleSideBar>
      <div>
        <Logo />
        <NavMenu />
        <Uploader />
      </div>
    </StyleSideBar>
  );
}

export default SideBar;
