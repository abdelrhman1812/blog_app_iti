import endPoints from "@/config/endpoints";
import queryKeys from "@/config/queryKey";
import useAddData from "@/hooks/curdsHook/useAddData";
import useGetData from "@/hooks/curdsHook/useGetData";

const useUserAuth = () => {
  const { data, isPending, isSuccess } = useGetData(
    endPoints.users,
    queryKeys.user
  );

  return { data, isPending, isSuccess };
};

export default useUserAuth;

export const useForgotPassword = () => {
  const { mutate, data, error, isPending, isSuccess, isError } = useAddData(
    endPoints.forgotPassword,
    [queryKeys.forgotPassword]
  );

  return { mutate, data, error, isPending, isSuccess, isError };
};

export const useResetPassword = () => {
  const { mutate, data, error, isPending, isSuccess, isError } = useAddData(
    endPoints.resetPassword,
    [queryKeys.resetPassword]
  );

  return { mutate, data, error, isPending, isSuccess, isError };
};
