import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { updateBooking } from "../../services/apiBookings";

export function useCheckIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkIn, isPending: isCheckin } = useMutation({
    mutationFn: ({ id, obj }) => updateBooking({ id, obj }),
    onSuccess: () => {
      toast.success("Booking successfully checked in");
      queryClient.invalidateQueries({
        active: true,
      });
      navigate("/");
    },
    onError: () => toast.error("There was an error when checking in"),
  });

  return { checkIn, isCheckin };
}
