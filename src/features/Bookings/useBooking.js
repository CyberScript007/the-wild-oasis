import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getBooking } from "../../services/apiBookings";

export const useBooking = function () {
  const { bookingId } = useParams();

  const { isPending: isLoading, data: booking } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
  });

  console.log(booking);

  return { isLoading, booking };
};
