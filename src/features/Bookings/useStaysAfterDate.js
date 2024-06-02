import { useQuery } from "@tanstack/react-query";
import { getStaysAfterDate } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";

export const useStaysAfterDate = function () {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const numNights = subDays(new Date(), numDays).toISOString();

  const { data: bookingAfterStays, isPending: isLoading } = useQuery({
    queryKey: ["stays", `last-${numDays}`],
    queryFn: () => getStaysAfterDate(numNights),
  });

  const confirmedStays = bookingAfterStays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  console.log(confirmedStays);

  return { bookingAfterStays, isLoading, confirmedStays, numDays };
};
