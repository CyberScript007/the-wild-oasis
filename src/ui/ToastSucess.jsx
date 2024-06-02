import toast from "react-hot-toast";
import styled from "styled-components";
import { toastDismissal } from "../utils/helpers";

const StyleToast = styled.div`
  color: #fff;
`;

const Button = styled.button`
  font-size: 2rem;
  width: 5rem;
  height: 4rem;

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

function ToastSucess() {
  return toast.success((t) => {
    <StyleToast>cabin successfully deleted</StyleToast>;
    <Button onClick={() => toastDismissal(t.id)}>&times;</Button>;
  });
}

export default ToastSucess;
