import { useQuery } from "@tanstack/react-query";
import { getSetting } from "../../services/apiSettings";

export function useFetchSettings() {
  const { isPending: isLoading, data: settingsData } = useQuery({
    queryKey: ["settings"],
    queryFn: getSetting,
  });

  return { isLoading, settingsData };
}
