import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createCabinUpdate as createCabinUpdateApi } from "../../services/apiCabins";

export function useUpdateCabin() {
  const queryClient = useQueryClient();
  const { mutate: updateCabin, isPending: isUpdating } = useMutation({
    mutationFn: ({ obj, id }) => createCabinUpdateApi(obj, id),
    onSuccess: () => {
      toast.success("Cabin successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: () => {
      toast.error("Cabin could not be updated");
    },
  });

  return { updateCabin, isUpdating };
}

export default useUpdateCabin;
