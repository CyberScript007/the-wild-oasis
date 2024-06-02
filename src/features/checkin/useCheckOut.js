import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckOut() {
  const queryClient = useQueryClient();
  const { mutate: checkOut, isPending: isCheckingOut } = useMutation({
    mutationFn: ({ id, obj }) => updateBooking({ id, obj }),
    onSuccess: () => {
      toast.success(`booking  successfully check out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was an error while checking out"),
  });

  return { checkOut, isCheckingOut };
}
