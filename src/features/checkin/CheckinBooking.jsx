import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import Row from "../../ui/Row";

import Heading from "../../ui/Heading";
import ButtonText from "../../ui/ButtonText";
import BoxDetails from "../../ui/BoxDetails";
import CheckBox from "../../ui/CheckBox";
import Box from "../../ui/Box";

import { formatCurrency } from "../../utils/helpers";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../Bookings/useBooking";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import { useCheckIn } from "./useCheckin";
import { useFetchSettings } from "../settings/useFetchSettings";

const StyleCheckinBooking = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakFast, setAddBreakFast] = useState(false);
  const { booking, isLoading } = useBooking();
  const { checkIn, isCheckin } = useCheckIn();
  const { isLoading: isLoading2, settingsData } = useFetchSettings();
  const moveBack = useMoveBack();

  useEffect(
    function () {
      setConfirmPaid(booking?.isPaid || false);
    },
    [booking]
  );

  if (isLoading || isCheckin || isLoading2) return <Spinner />;

  const {
    totalPrice,
    id: bookingId,
    numNights,
    numGuests,
    hasBreakfast,
    guests: { fullName: guestsName },
  } = booking;

  const optionalBreakFast =
    numGuests * numNights * settingsData?.breakfastPrice;

  const handleCheckIn = function () {
    if (addBreakFast) {
      checkIn({
        id: bookingId,
        obj: {
          isPaid: true,
          status: "checked-in",
          hasBreakfast: true,
          totalPrice: totalPrice + optionalBreakFast,
          extrasPrice: optionalBreakFast,
        },
      });
    } else {
      checkIn({ id: bookingId, obj: { status: "checked-in", isPaid: true } });
    }
  };

  return (
    <StyleCheckinBooking>
      <Row type="horizontal">
        <Heading as="h3">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>
      <BoxDetails booking={booking} />
      {!hasBreakfast && (
        <Box>
          <CheckBox
            id="breakfast"
            check={addBreakFast}
            onChange={() => {
              setAddBreakFast((addFast) => !addFast);
              setConfirmPaid(false);
            }}
          >{`I want to add breakfast for ${formatCurrency(
            optionalBreakFast
          )}`}</CheckBox>
        </Box>
      )}

      <Box>
        <CheckBox
          id="totalPrice"
          check={confirmPaid}
          onChange={() => setConfirmPaid((paid) => !paid)}
          disabled={confirmPaid}
        >
          {`I confirm that ${guestsName} has paid the total amount of ${formatCurrency(
            addBreakFast ? totalPrice + optionalBreakFast : totalPrice
          )}`}{" "}
          {addBreakFast
            ? `(${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakFast
              )})`
            : ""}
        </CheckBox>
      </Box>

      <ButtonGroup>
        <Button disabled={!confirmPaid} onClick={handleCheckIn}>
          check in booking #{bookingId}
        </Button>
        <Button $variation="tertiary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </StyleCheckinBooking>
  );
}

export default CheckinBooking;
