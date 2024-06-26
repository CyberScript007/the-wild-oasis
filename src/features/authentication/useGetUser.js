import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export const useGetUser = function () {
  const { isPending: isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getCurrentUser(),
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
};
