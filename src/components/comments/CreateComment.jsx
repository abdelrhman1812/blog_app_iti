import endPoints from "@/config/endpoints";
import { useAddComments } from "@/hooks/Actions/comments/useCommentsCurds";
import useUserAuth from "@/hooks/Actions/users/useUserAuth";
import { useFormik } from "formik";
import { Loader2, Send } from "lucide-react";
import { useMemo } from "react";
import * as Yup from "yup";
import ErrorMsg from "../auth/ErrorMsg";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
const CreateComment = ({ postId }) => {
  const { data } = useUserAuth();
  const { mutate, isPending } = useAddComments(
    postId ? `${endPoints.posts}/${postId}${endPoints.addComment}` : null
  );

  /* =========== Handle Add Comment =========== */

  const handleSubmit = (values) => {
    if (!postId) return;

    mutate(
      { data: values },
      {
        onSuccess: () => {
          formik.resetForm();
        },
      }
    );
  };

  /* =========== validationSchema =========== */

  let validationSchema = useMemo(() => {
    return Yup.object({
      content: Yup.string()
        .min(1)
        .max(2000)
        .trim()
        .required("content is required"),
    });
  }, []);

  /* =========== Formik =========== */

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });
  const handleBlur = (field) => (e) => {
    formik.handleBlur(e);
    if (formik.values[field].trim() === "") {
      formik.setFieldTouched(field, false);
    } else {
      formik.validateField(field);
    }
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex gap-3 items-start w-full"
    >
      <Avatar className="w-9 h-9 mt-1 flex-shrink-0">
        <AvatarImage
          src={data?.user?.image?.secure_url}
          alt={data?.user?.userName}
          className="object-cover"
        />
        <AvatarFallback className="bg-gray-200 dark:bg-gray-600">
          {data?.user?.userName?.charAt(0)?.toUpperCase() || "U"}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <div className="flex-1 relative">
            <Input
              id="content"
              name="content"
              placeholder="Write a comment..."
              className="w-full  dark:bg-background "
              onChange={(e) => {
                formik.handleChange(e);
                if (e.target.value === "") {
                  formik.setFieldTouched("content", false);
                }
              }}
              value={formik.values.content}
              onBlur={handleBlur("content")}
            />
          </div>

          <Button
            disabled={!(formik.isValid && formik.dirty) || isPending}
            type="submit"
            size="sm"
            className="rounded-full h-9 px-4 cursor-pointer"
          >
            {isPending ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Posting...</span>
              </div>
            ) : (
              <Send />
            )}
          </Button>
        </div>

        <ErrorMsg formik={formik} type="content" className="mt-1 ml-2" />
      </div>
    </form>
  );
};

export default CreateComment;
