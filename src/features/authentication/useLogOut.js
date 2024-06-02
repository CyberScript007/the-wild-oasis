import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export const useLogOut = function () {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: () => signOut(),
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
};
