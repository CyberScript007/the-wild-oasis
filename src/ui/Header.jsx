import styled from "styled-components";
import LogOut from "../features/authentication/LogOut";
import User from "../features/authentication/User";
import UserAccount from "../features/authentication/UserAccount";
import DarkMode from "./DarkMode";

const StyleHeader = styled.header`
  padding: 1.5rem 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.7rem;
  background-color: var(--color-grey-0);
`;

const Container = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`;

function Header() {
  return (
    <StyleHeader>
      <User />
      <Container>
        <UserAccount />
        <DarkMode />
        <LogOut />
      </Container>
    </StyleHeader>
  );
}

export default Header;
