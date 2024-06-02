import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import ButtonIcon from "../../ui/ButtonIcon";

function UserAccount() {
  const navigate = useNavigate();

  return (
    <ButtonIcon onClick={() => navigate("/account")}>
      <HiOutlineUser />
    </ButtonIcon>
  );
}

export default UserAccount;
