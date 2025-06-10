import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAddPosts } from "@/hooks/Actions/posts/usePostsCurds";
import useUserAuth from "@/hooks/Actions/users/useUserAuth";
import { useFormik } from "formik";
import { ImageIcon, Loader2, X } from "lucide-react";
import { useMemo, useState } from "react";
import * as Yup from "yup";
import ErrorMsg from "../auth/ErrorMsg";
const CreatePost = () => {
  const { data } = useUserAuth();
  const { mutate, isPending } = useAddPosts();
  const [files, setFiles] = useState(null);
  const [fileObjects, setFileObjects] = useState([]);

  const handleSubmit = (values) => {
    const { title, content } = values;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    if (fileObjects?.length > 0) {
      fileObjects?.forEach((file) => {
        formData.append("images", file);
      });
    }

    mutate(
      { data: formData },
      {
        onSuccess: () => {
          formik.resetForm();
          setFiles([]);
          setFileObjects([]);
          files?.forEach((file) => URL.revokeObjectURL(file));
        },
      }
    );
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

  const handleChange = (e) => {
    const filesArray = Array.from(e.target.files);
    const urls = filesArray.map((file) => URL.createObjectURL(file));
    setFiles(urls);
    setFileObjects(filesArray);
    formik.setFieldValue("images", files);
  };

  const removeImage = (index) => {
    URL.revokeObjectURL(files[index]);
    const newFiles = [...files];
    const newFileObjects = [...fileObjects];
    newFiles.splice(index, 1);
    newFileObjects.splice(index, 1);

    setFiles(newFiles);
    setFileObjects(newFileObjects);
  };

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage
              src={data?.user?.image?.secure_url}
              alt={data?.user?.userName}
            />
            <AvatarFallback>
              {data?.user?.userName?.charAt(0) || "U"}
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

          <div className="flex flex-col gap-4">
            {/* Preview Images */}
            {files && files.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {files.map((url, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={url}
                      alt={`preview-${idx}`}
                      className="h-24 w-24 object-cover rounded-md border"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(idx)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Upload Controls */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="images"
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer transition-colors"
                >
                  <ImageIcon className="w-5 h-5" />
                  <span>{files?.length > 0 ? "Add More" : "Add Photos"}</span>
                </Label>
                <Input
                  onChange={handleChange}
                  type="file"
                  className="hidden"
                  id="images"
                  name="images"
                  multiple
                  accept="image/*"
                />
              </div>

              <Button
                disabled={!(formik.isValid && formik.dirty) || isPending}
                type="submit"
                className="bg-primary hover:bg-primary/90 px-6 py-2 rounded-md"
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
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
