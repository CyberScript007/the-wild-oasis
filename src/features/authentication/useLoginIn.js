import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { getLogIn } from "../../services/apiAuth";

export const useLogIn = function () {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logIn, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => getLogIn({ email, password }),
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
      navigate("/dashboard", { replace: true });
    },
    onError: () => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { logIn, isLoading };
};
