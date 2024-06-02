import Heading from "../ui/Heading";

import UserUpdateAccount from "../features/account/UserUpdateAccount";
import styled from "styled-components";

const StyleAccount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function Account() {
  return (
    <StyleAccount>
      <Heading as="h3">Update your account</Heading>
      <UserUpdateAccount />
    </StyleAccount>
  );
}

export default Account;
