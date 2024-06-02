import styled from "styled-components";

import UpdateUserForm from "./UpdateUserForm";
import UpdateUserPassword from "./UpdateUserPassword";

const StyleUpdateAccount = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function UserUpdateAccount() {
  return (
    <StyleUpdateAccount>
      <UpdateUserForm />
      <UpdateUserPassword />
    </StyleUpdateAccount>
  );
}

export default UserUpdateAccount;
