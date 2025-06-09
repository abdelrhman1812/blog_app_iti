import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import formatDate from "@/utils/formatDate";
import { Heart, Reply } from "lucide-react";

const CommentItem = ({ comment }) => {
  return (
    <div key={comment._id} className="flex space-x-3">
      <Avatar className="w-8 h-8">
        <AvatarImage
          src={comment.createdBy.image.secure_url || "/placeholder.svg"}
          alt={comment.createdBy.userName}
        />
        <AvatarFallback>{comment.createdBy.userName.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-gray-100 rounded-lg px-3 py-2">
          <p className="font-semibold text-sm">{comment.createdBy.userName}</p>
          <p className="text-sm text-gray-700">{comment.content}</p>
        </div>
        <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
          <span>{formatDate(comment.createdAt)}</span>
          <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
            <Heart className="w-3 h-3 mr-1" />
            Like
          </Button>
          <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
            <Reply className="w-3 h-3 mr-1" />
            Reply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
