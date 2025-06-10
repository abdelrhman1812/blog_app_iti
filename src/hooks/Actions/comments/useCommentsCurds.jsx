import endPoints from "@/config/endpoints";
import queryKeys from "@/config/queryKey";
import useAddData from "@/hooks/curdsHook/useAddData";
import usePatchData from "@/hooks/curdsHook/usePatchData";

export const useAddComments = () => {
  const { mutate, data, error, isPending, isSuccess, isError } = useAddData(
    endPoints.comments,
    [queryKeys.comments],
    queryKeys.posts
  );

  return { mutate, data, error, isPending, isSuccess, isError };
};

export const usePatchComments = () => {
  const { mutate, data, error, isPending, isSuccess, isError } = usePatchData(
    endPoints.comments,
    [queryKeys.comments],
    queryKeys.posts
  );

  return { mutate, data, error, isPending, isSuccess, isError };
};
