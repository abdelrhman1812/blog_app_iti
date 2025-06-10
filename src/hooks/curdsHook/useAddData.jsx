// import { useAuth } from "@/context/AuthContext";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import postRequest from "../handleRequest/PostRequest";

// const useAddData = (url, mutationKeys, invalidateQueryKey) => {
//   const { token } = useAuth();

//   const queryClient = useQueryClient();
//   const [requestData, setRequestData] = useState(null);

//   const mutation = useMutation({
//     mutationKey: mutationKeys,
//     mutationFn: async ({ id, data, type }) => {
//       setRequestData(data);

//       if (id) {
//         switch (type) {
//           case "comment":
//             url = `${url}/${id}/comments`;
//             break;
//         }
//       }
//       return postRequest(url, data, token);
//     },
//     onMutate: () => {
//       const loadingToast = toast.loading("Processing...", {
//         position: "top-right",
//         autoClose: false,
//       });
//       return { loadingToast };
//     },
//     onSuccess: (data, variables, context) => {
//       const successMessage = data?.data?.message || "Success!";

//       invalidateQueryKey.forEach((key) => {
//         queryClient.invalidateQueries({ queryKey: [key] });
//       });

//       if (context?.loadingToast) {
//         toast.update(context.loadingToast, {
//           render: successMessage,
//           type: "success",
//           isLoading: false,
//           autoClose: 3000,
//         });
//       }
//     },
//     onError: (error, variables, context) => {
//       console.log(error);
//       const errorMessage =
//         error.response?.data?.message || "Something went wrong";

//       if (context?.loadingToast) {
//         toast.update(context.loadingToast, {
//           render: errorMessage,
//           type: "error",
//           isLoading: false,
//           autoClose: 5000,
//         });
//       }
//     },
//   });

//   return {
//     requestData,
//     ...mutation,
//   };
// };

// export default useAddData;

import { useAuth } from "@/context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import postRequest from "../handleRequest/PostRequest";

const useAddData = (url, mutationKeys, invalidateQueryKey) => {
  const { token } = useAuth();

  const queryClient = useQueryClient();
  const [requestData, setRequestData] = useState(null);

  const mutation = useMutation({
    mutationKey: mutationKeys,

    mutationFn: async ({ data }) => {
      setRequestData(data);
      return postRequest(url, data, token);
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

      const invalidateKeys = Array.isArray(invalidateQueryKey)
        ? invalidateQueryKey
        : [invalidateQueryKey];

      invalidateKeys.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: [key] });
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
      console.log(error);
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
