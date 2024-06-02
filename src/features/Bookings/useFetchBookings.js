import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { fetchBookings } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../utils/Constants";

export function useFetchBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // filter value
  const filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // sort value
  const sortValue = searchParams.get("sortBy") || "startDate-asc";

  const [field, directions] = sortValue.split("-");
  const sortBy = { field, directions };

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: bookings, count } = {}, isPending: isLoading } =
    useQuery({
      queryKey: ["bookings", filter, sortBy, page],
      queryFn: () => fetchBookings({ filter, sortBy, page }),
    });

  // Prefetch next page
  const pageCount = count / PAGE_SIZE;

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => fetchBookings({ filter, sortBy, page: page + 1 }),
    });

  // Prefetch prev page
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => fetchBookings({ filter, sortBy, page: page - 1 }),
    });

  return { bookings, count, isLoading };
}
