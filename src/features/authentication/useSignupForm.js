import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { getSignUp } from "../../services/apiAuth";

export const useSignupForm = function () {
  const { mutate: signupForm, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password, fullname }) =>
      getSignUp({ email, password, fullname }),
    onSuccess: () => {
      toast.success("User was successfully created");
    },
  });

  return { signupForm, isLoading };
};
