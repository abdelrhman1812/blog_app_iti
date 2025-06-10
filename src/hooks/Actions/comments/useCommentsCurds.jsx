import endPoints from "@/config/endpoints";
import queryKeys from "@/config/queryKey";
import useAddData from "@/hooks/curdsHook/useAddData";
import usePatchData from "@/hooks/curdsHook/usePatchData";

export const useAddComments = (url) => {
  const { mutate, data, error, isPending, isSuccess, isError } = useAddData(
    url,
    [queryKeys.comments],
    [queryKeys.posts, queryKeys.userProfileById]
  );

  return { mutate, data, error, isPending, isSuccess, isError };
};

export const usePatchComments = () => {
  const { mutate, data, error, isPending, isSuccess, isError } = usePatchData(
    endPoints.updateUserImage,
    [queryKeys.userProfile],
    [queryKeys.posts, queryKeys.userProfileById]
  );

  return { mutate, data, error, isPending, isSuccess, isError };
};
