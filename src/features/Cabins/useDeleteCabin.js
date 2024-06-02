import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DeleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { mutate: cabinDelete, isPending: isDeleting } = useMutation({
    mutationFn: (id) => DeleteCabin(id),
    onSuccess: () => {
      toast.success(`cabin sucessfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { cabinDelete, isDeleting };
}
