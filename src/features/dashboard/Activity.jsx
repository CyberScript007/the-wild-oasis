import styled from "styled-components";

import Tag from "../../ui/Tag";
import Img from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useCheckOut } from "../checkin/useCheckOut";

const StyleActivity = styled.div`
  padding: 1.2rem 0;
  border-bottom: 1px solid var(--color-grey-100);
  display: grid;
  grid-template-columns: 2.5fr 0.5fr 3fr 1.5fr 2.5fr;
  align-items: center;
  font-size: 1.3rem;
  gap: 1rem;

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }

  & p:first-of-type {
    font-weight: 600;
  }
`;

function Activity({ activity }) {
  const {
    id: bookingId,
    status,
    guests: { fullName, countryFlag },
    numNights,
  } = activity;

  const { checkOut, isCheckingOut } = useCheckOut();

  const statusTagName = {
    unconfirmed: "green",
    "checked-in": "blue",
  };

  return (
    <StyleActivity>
      {status === "unconfirmed" && (
        <Tag type={statusTagName[status]}>Arriving</Tag>
      )}
      {status === "checked-in" && (
        <Tag type={statusTagName[status]}>Departing</Tag>
      )}
      {<Img src={countryFlag} alt={`country flag`} />}
      <p>{fullName}</p>
      <p>{numNights} nights</p>
      {status === "unconfirmed" && (
        <Button $size="small" as={Link} to={`/checkin/${bookingId}`}>
          Check in
        </Button>
      )}
      {status === "checked-in" && (
        <Button
          $size="small"
          onClick={() =>
            checkOut({ id: bookingId, obj: { status: "checked-out" } })
          }
          disabled={isCheckingOut}
        >
          Check out
        </Button>
      )}
    </StyleActivity>
  );
}

export default Activity;
