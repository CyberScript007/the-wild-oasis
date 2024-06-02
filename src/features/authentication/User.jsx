import styled from "styled-components";
import { useGetUser } from "./useGetUser";

const StyleUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
`;

const P = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-800);
  font-weight: 500;
`;

const Img = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border: 1px solid var(--color-grey-100);
  border-radius: 100%;
`;

function User() {
  const { user } = useGetUser();

  const { fullname, avatar } = user.user_metadata;
  return (
    <StyleUser>
      <Img src={avatar || "./default-user.jpg"} alt={fullname} />
      <P>{fullname}</P>
    </StyleUser>
  );
}

export default User;
