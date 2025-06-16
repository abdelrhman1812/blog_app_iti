import endPoints from "@/config/endpoints";
import { useDeleteComments } from "@/hooks/Actions/comments/useCommentsCurds";
import formatDate from "@/utils/formatDate";
import isArabic from "@/utils/IsArabic";
import { Edit, Heart } from "lucide-react";
import { Button } from "../ui/button";

const CommentContent = ({ comment, user, setIsEditing, postId }) => {
  const { mutate } = useDeleteComments();

  const handleDelete = () => {
    const url =
      postId && comment
        ? `${endPoints.posts}/${postId}${endPoints.deleteComment}/${comment?._id}`
        : null;
    mutate({ url });
  };

  return (
    <>
      <div className="bg-background-foreground max shadow space-y-1 rounded-lg px-2 py-2">
        <p className="font-semibold text-sm capitalize m-0">
          {comment?.createdBy.userName}
        </p>
        <span className="text-[10px] text-gray-500">
          {formatDate(comment?.createdAt)}
        </span>
        <p
          className="text-sm text-muted-foreground my-2 dark:text-white break-words overflow-hidden break-all "
          dir={isArabic(comment?.content) ? "rtl" : "ltr"}
        >
          {comment?.content}
        </p>
      </div>

      {/* Btn Action */}
      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 ">
        <Button
          variant="default"
          size="sm"
          className="h-auto p-0 text-xs bg-transparent hover:text-destructive cursor-pointer hover:bg-transparent text-muted-foreground shadow-none"
        >
          <Heart className="w-3 h-3 mr-1" />
          Like
        </Button>
        {user?.user._id === comment?.createdBy?._id && (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-xs bg-transparent hover:text-primary cursor-pointer hover:bg-transparent text-muted-foreground shadow-none"
              onClick={() => setIsEditing(true)}
            >
              <Edit className="w-3 h-3 mr-1" />
              Edit
            </Button>
            <Button
              onClick={handleDelete}
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-xs bg-transparent hover:text-destructive cursor-pointer hover:bg-transparent text-muted-foreground shadow-none"
            >
              <Edit className="w-3 h-3 mr-1" />
              Delete
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default CommentContent;
