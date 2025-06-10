import endPoints from "@/config/endpoints";
import queryKeys from "@/config/queryKey";
import useGetData from "@/hooks/curdsHook/useGetData";

const useUserAuth = () => {
  const { data, isPending, isSuccess } = useGetData(
    endPoints.users,
    queryKeys.user
  );

  return { data, isPending, isSuccess };
};

export default useUserAuth;
