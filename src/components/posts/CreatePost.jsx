import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon } from "lucide-react";

const CreatePost = () => {
  return (
    <>
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={"/placeholder-user.jpg"} alt="Your profile" />
              <AvatarFallback>
                {/* {user?.name?.charAt(0) || "U"} */}
              </AvatarFallback>
            </Avatar>
            <Input
              placeholder="What's on your mind?"
              className="flex-1 bg-gray-100 border-none rounded-full px-4"
            />
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <form className="space-y-4">
            <Input placeholder="Post title..." className="w-full" />
            <Textarea
              placeholder="Write your post content here..."
              className="w-full min-h-[100px] resize-none"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-accent hover:bg-accent/50"
                >
                  <ImageIcon className="w-5 h-5 mr-2" />
                  Photo
                </Button>
              </div>
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Post
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default CreatePost;
