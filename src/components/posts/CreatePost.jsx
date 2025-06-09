import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/context/AuthContext";
import { useAddPosts } from "@/hooks/Actions/posts/usePostsCurds";
import { useFormik } from "formik";
import { ImageIcon, Loader2 } from "lucide-react";
import { useMemo } from "react";
import * as Yup from "yup";
import ErrorMsg from "../auth/ErrorMsg";

const CreatePost = () => {
  const { user } = useAuth();
  const { mutate, isPending } = useAddPosts();
  const handleSubmit = (values) => {
    const { title, content } = values;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    mutate(formData, {
      onSuccess: () => {
        formik.resetForm();
      },
    });
  };

  let validationSchema = useMemo(() => {
    return Yup.object({
      title: Yup.string().min(2).max(60).trim().required("Title is required"),
      content: Yup.string()
        .min(5)
        .max(2000)
        .trim()
        .required("content is required"),
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage
              src={user?.user?.image?.secure_url}
              alt={user?.user?.userName}
            />
            <AvatarFallback>
              {user?.user?.userName?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
          <Input
            placeholder="What's on your mind?"
            className="flex-1 bg-gray-100 border-none rounded-full px-4"
          />
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Title */}
          <div className="space-y-2">
            <Input
              name="title"
              id="title"
              placeholder="Post title..."
              className="w-full"
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
            />
            <ErrorMsg formik={formik} type={"title"} />
          </div>
          {/* Content */}
          <div className="space-y-2">
            <Textarea
              name="content"
              id="content"
              placeholder="Write your post content here..."
              className="w-full min-h-[100px] resize-none"
              onChange={formik.handleChange}
              value={formik.values.content}
              onBlur={formik.handleBlur}
            />
            <ErrorMsg formik={formik} type={"content"} />
          </div>
          {/* Image */}
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
            <Button
              disabled={!(formik.isValid && formik.dirty) || isPending}
              type="submit"
              className="bg-primary hover:bg-primary/90"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Posting...
                </>
              ) : (
                "Post"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
