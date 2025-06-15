/* Old Code Before Cache */

// import { useQuery } from "@tanstack/react-query";
// import getRequest from "../handleRequest/GetRequest";

// const useGetData = (url, queryKey) => {
//   const getDataRequest = async () => {
//     const { data } = await getRequest(url);
//     return data?.data;
//   };

//   const { data, isPending, error } = useQuery({
//     queryKey: [queryKey],
//     queryFn: () => getDataRequest(),
//   });

//   return { data, isPending, error };
// };

// export default useGetData;

/* New Code After Cache */

import { useAuth } from "@/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import getRequest from "../handleRequest/GetRequest";

const useGetData = (url, queryKey, id) => {
  const { token } = useAuth();

  const getDataRequest = async () => {
    try {
      console.log();
      const { data } = await getRequest(url, token);
      const result = data?.data;

      localStorage.setItem(`cache-${queryKey}`, JSON.stringify(result));

      return result;
    } catch (error) {
      const cachedData = localStorage.getItem(`cache-${queryKey}`);
      if (cachedData) {
        return JSON.parse(cachedData);
      }
      throw error;
    }
  };

  const { data, isPending, error, isLoading } = useQuery({
    queryKey: [queryKey, id].filter(Boolean),
    queryFn: getDataRequest,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 60,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isPending, error };
};

export default useGetData;
