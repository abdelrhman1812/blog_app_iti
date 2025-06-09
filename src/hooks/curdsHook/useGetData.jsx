import { useQuery } from "@tanstack/react-query";
import getRequest from "../handleRequest/GetRequest";

const useGetData = (url, queryKey) => {
  const getDataRequest = async () => {
    const { data } = await getRequest(url);
    return data?.data;
  };

  const { data, isPending, error } = useQuery({
    queryKey: [queryKey],
    queryFn: () => getDataRequest(),
  });

  return { data, isPending, error };
};

export default useGetData;
