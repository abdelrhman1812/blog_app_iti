import endPoints from "@/config/endpoints";
import queryKeys from "@/config/queryKey";
import useGetData from "@/hooks/curdsHook/useGetData";
import usePatchData from "@/hooks/curdsHook/usePatchData";

export const useGetAllUsers = () => {
  const { data, isPending, isSuccess } = useGetData(
    endPoints.getAllUser,
    queryKeys.getAllUser
  );

  return { data, isPending, isSuccess };
};

export const useGetUserProfile = (url, id) => {
  const { data, isPending, isSuccess } = useGetData(
    url,
    queryKeys.userProfileById,
    id
  );

  return { data, isPending, isSuccess };
};

export const usePatchUserImageProfile = () => {
  const { mutate, data, isPending, isSuccess } = usePatchData(
    endPoints.updateUserImage,
    queryKeys.updateUserImage,
    [
      queryKeys.userProfileById,
      queryKeys.posts,
      queryKeys.getAllUser,
      queryKeys.user,
    ]
  );

  return { mutate, data, isPending, isSuccess };
};
