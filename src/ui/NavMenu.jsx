import {
  HiOutlineCalendarDays,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  margin-top: 3rem;
`;

const NavLinkStyle = styled(NavLink)`
  padding: 1.5rem 2.5rem;
  font-size: 1.6rem;
  text-transform: capitalize;
  margin-bottom: 1rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 1.3rem;

  & svg {
    width: 2.5rem;
    height: 2.5rem;
    stroke: var(--color-grey-400);
  }

  &:hover,
  &.active {
    background-color: var(--color-grey-50);
  }

  &:hover svg,
  &.active svg {
    stroke: var(--color-brand-500);
  }
`;

function NavMenu() {
  return (
    <Nav>
      <ul>
        <li>
          <NavLinkStyle to="/dashboard">
            <HiOutlineHome />
            <span>home</span>
          </NavLinkStyle>
        </li>
        <li>
          <NavLinkStyle to="/bookings">
            <HiOutlineCalendarDays />
            <span>bookings</span>
          </NavLinkStyle>
        </li>
        <li>
          <NavLinkStyle to="/cabins">
            <HiOutlineHomeModern />
            <span>cabins</span>
          </NavLinkStyle>
        </li>
        <li>
          <NavLinkStyle to="/users">
            <HiOutlineUsers />
            <span>users</span>
          </NavLinkStyle>
        </li>
        <li>
          <NavLinkStyle to="/settings">
            <HiOutlineCog6Tooth />
            <span>settings</span>
          </NavLinkStyle>
        </li>
      </ul>
    </Nav>
  );
}

export default NavMenu;
