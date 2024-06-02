import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookingStays, confirmedStays, numDays, cabinsCount }) {
  // bookingg length
  const numBookings = bookingStays.length;

  // total price for all booking sales
  const totalSales = confirmedStays.reduce(
    (acc, cur) => acc + cur.totalPrice,
    0
  );

  // total number that check in
  const checkIn = confirmedStays.length;

  const rate =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsCount);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        colorFill="blue-700"
        colorType="blue-100"
        label="bookings"
        value={numBookings}
      />

      <Stat
        icon={<HiOutlineBanknotes />}
        colorFill="green-700"
        colorType="green-100"
        label="sales"
        value={formatCurrency(totalSales)}
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        colorFill="indigo-700"
        colorType="indigo-100"
        label="check ins"
        value={checkIn}
      />

      <Stat
        icon={<HiOutlineChartBar />}
        colorFill="yellow-700"
        colorType="yellow-100"
        label="occupancy rate"
        value={Math.round(rate * 100) + "%"}
      />
    </>
  );
}

export default Stats;
