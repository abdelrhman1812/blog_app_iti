import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import postRequest from "../handleRequest/PostRequest";

const useAddData = (url, mutationKeys, invalidateQueryKey) => {
  const queryClient = useQueryClient();
  const [requestData, setRequestData] = useState(null);

  const mutation = useMutation({
    mutationKey: mutationKeys,
    mutationFn: async (data) => {
      setRequestData(data);
      return postRequest(url, data);
    },
    onMutate: () => {
      const loadingToast = toast.loading("Processing...", {
        position: "top-right",
        autoClose: false,
      });
      return { loadingToast };
    },
    onSuccess: (data, variables, context) => {
      const successMessage = data?.data?.message || "Success!";

      queryClient.invalidateQueries({
        queryKey: [invalidateQueryKey],
      });

      if (context?.loadingToast) {
        toast.update(context.loadingToast, {
          render: successMessage,
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      }
    },
    onError: (error, variables, context) => {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";

      if (context?.loadingToast) {
        toast.update(context.loadingToast, {
          render: errorMessage,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    },
  });

  return {
    requestData,
    ...mutation,
  };
};

export default useAddData;
