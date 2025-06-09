import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CreateComment = () => {
  return (
    <form className="flex space-x-3">
      <Avatar className="w-8 h-8">
        <AvatarImage src="/placeholder-user.jpg" alt="You" />
        <AvatarFallback>YU</AvatarFallback>
      </Avatar>
      <div className="flex-1 flex space-x-2">
        <Input
          placeholder="Write a comment..."
          className="flex-1 rounded-full bg-gray-100 border-none"
        />
        <Button type="submit" size="sm">
          Post
        </Button>
      </div>
    </form>
  );
};

export default CreateComment;
