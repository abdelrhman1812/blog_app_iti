// import { useAuth } from "@/context/AuthContext";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import patchRequest from "../handleRequest/PatchRequest";

// const usePatchData = (url, mutationKeys, invalidateQueryKey) => {
//   const { token } = useAuth();
//   const queryClient = useQueryClient();

//   const mutation = useMutation({
//     mutationKey: mutationKeys,
//     mutationFn: async ({ id, data, type, commentId }) => {
//       let updateUrl = url;

//       if (id) {
//         if (type === "comment" && commentId) {
//           updateUrl = `${url}/${id}/comments/${commentId}`;
//         } else {
//           updateUrl = `${url}/${id}`;
//         }
//       }
//       console.log(updateUrl);
//       return patchRequest(updateUrl, data, token);
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

//   return { ...mutation };
// };

// export default usePatchData;

import { useAuth } from "@/context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import patchRequest from "../handleRequest/PatchRequest";

const usePatchData = (url, mutationKeys, invalidateQueryKey) => {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: mutationKeys,
    mutationFn: async ({ data }) => {
      return patchRequest(url, data, token);
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

  return { ...mutation };
};

export default usePatchData;
