import endPoints from "@/config/endpoints";
import queryKeys from "@/config/queryKey";
import useGetData from "@/hooks/curdsHook/useGetData";

export const useGetAllPosts = () => {
  const { data, isPending, isSuccess } = useGetData(endPoints.posts, [
    queryKeys.posts,
  ]);

  return { data, isPending, isSuccess };
};
