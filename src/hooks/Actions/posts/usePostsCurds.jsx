import endPoints from "@/config/endpoints";
import queryKeys from "@/config/queryKey";
import useAddData from "@/hooks/curdsHook/useAddData";
import useGetData from "@/hooks/curdsHook/useGetData";

export const useGetAllPosts = () => {
  const { data, isPending, isSuccess } = useGetData(
    endPoints.posts,
    queryKeys.posts
  );

  return { data, isPending, isSuccess };
};

/*  url, mutationKeys, invalidateQueryKey */
export const useAddPosts = () => {
  const { mutate, data, error, isPending, isSuccess, isError } = useAddData(
    endPoints.posts,
    [queryKeys.posts],
    queryKeys.posts
  );

  return { mutate, data, error, isPending, isSuccess, isError };
};
