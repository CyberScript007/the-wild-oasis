import { styled } from "styled-components";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";

import { cloneElement, createContext, useContext, useState } from "react";

import { useOutsideClick } from "../hooks/useOutsideClick";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  backdrop-filter: blur(0.5rem);
`;

const StyleModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  padding: 2.5rem 4rem;
  box-shadow: var(--shadow-lg);
  border-radius: var(--border-radius-lg);
`;

const Button = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  position: absolute;
  background-color: transparent;
  top: 1rem;
  right: 1rem;
  border: 0;
  border-radius: var(--border-radius-sm);

  & svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

const ModalContext = createContext();

const Modal = function ({ children }) {
  const [showModal, setShowModal] = useState("");

  const openModal = (show) => setShowModal(show);
  const closeModal = () => setShowModal("");

  return (
    <ModalContext.Provider
      value={{
        showModal,
        openModal,
        closeModal,
      }}
    >
      <div>{children}</div>
    </ModalContext.Provider>
  );
};

const Open = function ({ children, openName }) {
  const { openModal } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => openModal(openName) });
};

function Window({ children, windowName }) {
  const { showModal, closeModal } = useContext(ModalContext);
  const { elementRef } = useOutsideClick(closeModal, true);

  if (showModal !== windowName) return;

  return createPortal(
    <Overlay>
      <StyleModal ref={elementRef}>
        <Button onClick={closeModal}>
          <HiXMark />
        </Button>
        {cloneElement(children, { onCloseModal: closeModal })}
      </StyleModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
