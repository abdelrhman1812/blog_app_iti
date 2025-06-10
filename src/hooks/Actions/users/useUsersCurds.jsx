import endPoints from "@/config/endpoints";
import queryKeys from "@/config/queryKey";
import useGetData from "@/hooks/curdsHook/useGetData";

export const useGetAllUsers = () => {
  const { data, isPending, isSuccess } = useGetData(
    endPoints.getAllUser,
    queryKeys.getAllUser
  );

  return { data, isPending, isSuccess };
};

export const useGetUserProfile = (url) => {
  const { data, isPending, isSuccess } = useGetData(
    url,
    queryKeys.userProfileById
  );

  return { data, isPending, isSuccess };
};
