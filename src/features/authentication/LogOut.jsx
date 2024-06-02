import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";

import ButtonIcon from "../../ui/ButtonIcon";
import { useLogOut } from "./useLogOut";
import SpinnerMini from "../../ui/SpinnerMini";

function LogOut() {
  const { logout, isLoading } = useLogOut();
  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      {isLoading ? <SpinnerMini /> : <HiOutlineArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default LogOut;
