import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createCabinUpdate as createCabinUpdateApi } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabinUpdate, isPending: isCreating } = useMutation({
    mutationFn: (obj) => createCabinUpdateApi(obj),
    onSuccess: () => {
      toast.success("Cabin successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createCabinUpdate, isCreating };
}
