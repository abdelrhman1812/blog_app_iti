import endPoints from "@/config/endpoints";
import queryKeys from "@/config/queryKey";
import useAddData from "@/hooks/curdsHook/useAddData";

const useRegister = () => {
  const { mutate, data, error, isPending, isSuccess, isError } = useAddData(
    endPoints.register,
    [queryKeys.register]
  );

  return { mutate, data, error, isPending, isSuccess, isError };
};

export default useRegister;
