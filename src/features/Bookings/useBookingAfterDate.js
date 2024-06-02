import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getBookingsAfterDate } from "../../services/apiBookings";
import { subDays } from "date-fns";

export const useBookingAfterDate = function () {
  const [searchParams] = useSearchParams();
  const numDays = searchParams.get("last") || 7;

  const numNights = subDays(new Date(), Number(numDays)).toISOString();
  console.log(numNights.toString());

  const { data: bookingStays, isPending: isLoading } = useQuery({
    queryFn: () => getBookingsAfterDate(numNights),
    queryKey: ["booking", `last-${numDays}`],
  });

  return { bookingStays, isLoading };
};
