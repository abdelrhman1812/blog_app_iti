import endPoints from "@/config/endpoints";
import queryKeys from "@/config/queryKey";
import useGetData from "@/hooks/curdsHook/useGetData";
import usePatchData from "@/hooks/curdsHook/usePatchData";

export const useGetSuggestedUsers = () => {
  const { data, isPending, isSuccess } = useGetData(
    endPoints.suggestedUser,
    queryKeys.suggestedUser
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
    [queryKeys.userProfileById, queryKeys.posts, queryKeys.user]
  );

  return { mutate, data, isPending, isSuccess };
};

export const usePatchFollow = (url) => {
  const { mutate, data, error, isPending, isSuccess, isError } = usePatchData(
    url,
    [queryKeys.postLike],
    [queryKeys.suggestedUser, queryKeys.userProfileById]
  );

  return { mutate, data, error, isPending, isSuccess, isError };
};

export const useUpdateUserData = () => {
  const { mutate, data, error, isPending, isSuccess, isError } = usePatchData(
    endPoints.updateUserProfile,
    [queryKeys.updateUserProfile],
    [
      queryKeys.updateUserProfile,
      queryKeys.suggestedUser,
      queryKeys.userProfileById,
    ]
  );

  return { mutate, data, error, isPending, isSuccess, isError };
};
