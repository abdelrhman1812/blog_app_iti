import { Button } from "@/components/ui/button";
import { useState } from "react";
import CommentItem from "./CommentItem";
import CreateComment from "./CreateComment";

const CommentList = ({ comments, postId }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="space-y-3">
      {/* Toggle Comments Button */}
      {comments.length > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowComments(!showComments)}
          className="text-gray-600 p-2 h-auto cursor-pointer  hover:bg-transparent hover:text-primary"
        >
          {showComments ? "Hide" : "View"} {comments.length} comment
          {comments.length !== 1 ? "s" : ""}
        </Button>
      )}

      {/* Comments List */}
      {showComments && (
        <div className="space-y-3 pl-4 border-l-2 border-gray-100">
          {comments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} postId={postId} />
          ))}
        </div>
      )}
      {/* Add Comment Form */}
      <CreateComment postId={postId} />
    </div>
  );
};

export default CommentList;
