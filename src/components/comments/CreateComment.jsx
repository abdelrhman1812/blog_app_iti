import endPoints from "@/config/endpoints";
import { useAuth } from "@/context/AuthContext";
import { useAddComments } from "@/hooks/Actions/comments/useCommentsCurds";
import { useFormik } from "formik";
import { Loader2 } from "lucide-react";
import { useMemo } from "react";
import * as Yup from "yup";
import ErrorMsg from "../auth/ErrorMsg";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
const CreateComment = ({ postId }) => {
  const { user } = useAuth();
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
        .min(5)
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
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex gap-3 items-start w-full"
    >
      <Avatar className="w-9 h-9 mt-1 flex-shrink-0">
        <AvatarImage
          src={user?.user?.image?.secure_url}
          alt={user?.user?.userName}
          className="object-cover"
        />
        <AvatarFallback className="bg-gray-200 dark:bg-gray-600">
          {user?.user?.userName?.charAt(0)?.toUpperCase() || "U"}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <div className="flex-1 relative">
            <Input
              id="content"
              name="content"
              placeholder="Write a comment..."
              className="rounded-full bg-gray-100 dark:bg-gray-800 border-none px-4 py-5 focus-visible:ring-2 focus-visible:ring-primary"
              onChange={formik.handleChange}
              value={formik.values.content}
              onBlur={formik.handleBlur}
            />
          </div>

          <Button
            disabled={!(formik.isValid && formik.dirty) || isPending}
            type="submit"
            size="sm"
            className="rounded-full h-9 px-4"
          >
            {isPending ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Posting...</span>
              </div>
            ) : (
              "Post"
            )}
          </Button>
        </div>

        <ErrorMsg formik={formik} type="content" className="mt-1 ml-2" />
      </div>
    </form>
  );
};

export default CreateComment;
