import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import endPoints from "@/config/endpoints";
import { usePatchComments } from "@/hooks/Actions/comments/useCommentsCurds";
import useUserAuth from "@/hooks/Actions/users/useUserAuth";
import { useFormik } from "formik";
import { useMemo, useState } from "react";
import * as Yup from "yup";
import CommentContent from "./CommentContent";
import EditComment from "./EditComment";

const CommentItem = ({ comment, postId }) => {
  const { data: user } = useUserAuth();
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

      {/* comment content && edit */}
      <div className="flex-1">
        {isEditing ? (
          <EditComment
            formik={formik}
            handleCancel={handleCancel}
            isPending={isPending}
          />
        ) : (
          <>
            <CommentContent
              postId={postId}
              comment={comment}
              user={user}
              setIsEditing={setIsEditing}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
