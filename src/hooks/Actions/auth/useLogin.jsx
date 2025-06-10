import queryKeys from "@/config/queryKey";
import { useAuth } from "@/context/AuthContext";
import useAddData from "@/hooks/curdsHook/useAddData";
import { setAuthCookie } from "@/services/cookies";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = (url) => {
  const { setToken } = useAuth();
  const { mutate, data, error, isPending, isSuccess, isError } = useAddData(
    url,
    [queryKeys.login],
    queryKeys.user
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && data) {
      setAuthCookie(data?.data?.data?.token);
      setToken(data?.data?.data?.token);
      navigate("/");
    } else if (isError) {
      console.error("Login error:", error);
    }
  }, [data, isSuccess, isError, error, navigate, setToken]);

  return { mutate, data, error, isPending, isSuccess, isError };
};

export default useLogin;
