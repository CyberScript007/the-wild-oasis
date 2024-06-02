import { createContext, useContext, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";

import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

const Menu = styled.div``;

const StyleToggle = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: var(--border-radius-sm);
  color: var(--color-grey-900);
  background-color: transparent;
  border: 0;
  transition: all 0.3s ease;

  & svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

const StyleList = styled.ul`
  position: fixed;
  width: 18rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);
  background-color: var(--color-grey-0);
  top: ${(props) => props.$position.y}px;
  right: ${(props) => props.$position.x}px;
`;

const StyleButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 2rem;
  border: 0;
  color: var(--color-grey-800);
  background-color: transparent;
  font-size: 1.4rem;
  transition: all 0.3s ease;

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    fill: var(--color-grey-400);
  }

  &:hover {
    background-color: var(--color-grey-50);
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [showMenu, setShowMenu] = useState("");
  const [position, setPosition] = useState(null);

  console.log(showMenu);

  const openMenu = (show) => setShowMenu(show);
  const closeMenu = () => setShowMenu("");

  return (
    <MenusContext.Provider
      value={{
        showMenu,
        openMenu,
        closeMenu,
        position,
        setPosition,
      }}
    >
      {children}
    </MenusContext.Provider>
  );
}

const Toggle = function ({ id }) {
  const { showMenu, closeMenu, openMenu, setPosition } =
    useContext(MenusContext);

  const handleClick = function (e) {
    e.stopPropagation();

    const rect = e.target.closest("button").getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.height + rect.y + 8,
    });

    showMenu === "" || showMenu !== id ? openMenu(id) : closeMenu();
    // console.log(showMenu);
    // console.log(id);
  };

  return (
    <StyleToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyleToggle>
  );
};

const List = function ({ children, id }) {
  const { closeMenu } = useContext(MenusContext);
  const { elementRef } = useOutsideClick(closeMenu, false);

  const { showMenu, position } = useContext(MenusContext);

  if (showMenu !== id) return;

  return createPortal(
    <StyleList $position={position} ref={elementRef}>
      {children}
    </StyleList>,
    document.body
  );
};

const Button = function ({ children, icon, onClick }) {
  const { closeMenu } = useContext(MenusContext);

  const handleClick = function () {
    onClick?.();
    closeMenu();
  };

  return (
    <li>
      <StyleButton onClick={handleClick}>
        {icon} {children}
      </StyleButton>
    </li>
  );
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
