import endPoints from "@/config/endpoints";
import queryKeys from "@/config/queryKey";
import useAddData from "@/hooks/curdsHook/useAddData";
import useDeleteData from "@/hooks/curdsHook/useDeleteData";
import useGetData from "@/hooks/curdsHook/useGetData";
import usePatchData from "@/hooks/curdsHook/usePatchData";

export const useGetAllPosts = () => {
  const { data, isPending, isSuccess } = useGetData(
    endPoints.posts,
    queryKeys.posts
  );

  return { data, isPending, isSuccess };
};

export const useDeletePost = () => {
  const { mutate, isPending, isSuccess } = useDeleteData(
    endPoints.deletePosts,
    [queryKeys.postsDelete],
    [queryKeys.posts, queryKeys.user]
  );
  return { mutate, isPending, isSuccess };
};

export const useAddPosts = () => {
  const { mutate, data, error, isPending, isSuccess, isError } = useAddData(
    endPoints.posts,
    [queryKeys.postsAdd],
    [queryKeys.posts, queryKeys.user]
  );

  return { mutate, data, error, isPending, isSuccess, isError };
};

export const usePatchPost = (url) => {
  const { mutate, data, error, isPending, isSuccess, isError } = usePatchData(
    url,
    [queryKeys.postsPatch],
    [queryKeys.posts, queryKeys.user]
  );

  return { mutate, data, error, isPending, isSuccess, isError };
};
