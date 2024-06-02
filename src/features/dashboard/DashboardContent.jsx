import styled from "styled-components";

import Stats from "./Stats";
import Spinner from "../../ui/Spinner";

import TodayActivity from "./TodayActivity";
import DurationActivity from "./DurationActivity";
import SalesChart from "./SalesChart";

import { useBookingAfterDate } from "../Bookings/useBookingAfterDate";
import { useStaysAfterDate } from "../Bookings/useStaysAfterDate";
import { useLoadCabin } from "../Cabins/useLoadCabin";

const StyleDashboardContent = styled.section`
  display: grid;
  grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
  grid-template-rows: auto 34rem 40rem;
  gap: 2.5rem;
`;

function DashboardContent() {
  const { bookingStays, isLoading: isLoading1 } = useBookingAfterDate();

  const {
    isLoading: isLoading2,
    confirmedStays,
    numDays,
  } = useStaysAfterDate();

  const { cabins, isLoading: isLoading3 } = useLoadCabin();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyleDashboardContent>
      <Stats
        bookingStays={bookingStays}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinsCount={cabins.length}
      />
      <TodayActivity />
      <DurationActivity confirmedStays={confirmedStays} />
      <SalesChart bookingStay={bookingStays} numDays={numDays} />
    </StyleDashboardContent>
  );
}

export default DashboardContent;
