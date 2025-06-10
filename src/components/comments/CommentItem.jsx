import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import endPoints from "@/config/endpoints";
import { useAuth } from "@/context/AuthContext";
import { usePatchComments } from "@/hooks/Actions/comments/useCommentsCurds";
import formatDate from "@/utils/formatDate";
import { useFormik } from "formik";
import { Check, Edit, Heart, Loader2, X } from "lucide-react";
import { useMemo, useState } from "react";
import * as Yup from "yup";
import ErrorMsg from "../auth/ErrorMsg";

const CommentItem = ({ comment, postId }) => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const { mutate, isPending } = usePatchComments(
    postId && comment
      ? `${endPoints.posts}/${postId}${endPoints.updateComment}/${comment?._id}`
      : null
  );

  const validationSchema = useMemo(() => {
    return Yup.object({
      content: Yup.string()
        .min(5)
        .max(2000)
        .trim()
        .required("content is required"),
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      content: comment.content,
    },
    validationSchema,
    onSubmit: (values) => {
      mutate(
        {
          id: postId,
          data: { content: values.content },
          commentId: comment._id,
          type: "comment",
        },
        {
          onSuccess: () => {
            setIsEditing(false);
          },
        }
      );
    },
  });

  const handleCancel = () => {
    formik.resetForm();
    setIsEditing(false);
  };

  return (
    <div key={comment._id} className="flex gap-3">
      <Avatar className="w-8 h-8">
        <AvatarImage
          src={comment.createdBy.image?.secure_url}
          alt={comment.createdBy.userName}
        />
        <AvatarFallback>
          {comment?.createdBy?.userName?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1">
        {isEditing ? (
          <form onSubmit={formik.handleSubmit} className="space-y-2">
            <div>
              <Input
                id="content"
                name="content"
                value={formik.values.content}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="bg-white"
                autoFocus
              />
              <ErrorMsg formik={formik} type={"content"} />
            </div>
            <div className="flex gap-2">
              <Button
                type="submit"
                size="sm"
                className="h-8 gap-1"
                disabled={!(formik.isValid && formik.dirty) || isPending}
              >
                <Check className="w-3 h-3" />
                {isPending ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Posting...</span>
                  </div>
                ) : (
                  "Save"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleCancel}
                className="h-8 gap-1 hover:bg-error hover:text-white"
              >
                <X className="w-3 h-3" />
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <>
            <div className="bg-gray-100 rounded-lg px-3 py-2">
              <p className="font-semibold text-sm">
                {comment.createdBy.userName}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {comment.content}
              </p>
            </div>
            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500 dark:text-gray-400">
              <span>{formatDate(comment.createdAt)}</span>
              <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                <Heart className="w-3 h-3 mr-1" />
                Like
              </Button>
              {user?.user._id === comment?.createdBy?._id && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-xs"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit className="w-3 h-3 mr-1" />
                  Edit
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
