import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Spinner from "../../ui/Spinner";
import HeadingGroup from "../../ui/HeadingGroup";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonText from "../../ui/ButtonText";
import BoxDetails from "../../ui/BoxDetails";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";

import { useBooking } from "./useBooking";
import { useMoveBack } from "../../hooks/useMoveBack";

const StyleBookingDetails = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmptyBox = styled.p`
  font-size: 1.4rem;
`;

function BookingDetails() {
  const { isLoading, booking } = useBooking();
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  console.log(booking);

  if (isLoading) return <Spinner />;

  if (!booking) return <EmptyBox>No booking could be found</EmptyBox>;

  const { status } = booking;

  const statusTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <StyleBookingDetails>
      <DetailsRow>
        <HeadingGroup>
          <Heading as="h3">Booking #{booking.id}</Heading>
          <Tag type={statusTagName[status]}>{status}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </DetailsRow>
      <BoxDetails booking={booking} />
      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${booking.id}`)}>
            Check In
          </Button>
        )}
        <Button $variation="danger">Deleting Booking</Button>
        <Button $variation="tertiary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </StyleBookingDetails>
  );
}

export default BookingDetails;
