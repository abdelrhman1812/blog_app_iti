import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAddPosts } from "@/hooks/Actions/posts/usePostsCurds";
import useUserAuth from "@/hooks/Actions/users/useUserAuth";
import { useFormik } from "formik";
import { Loader2 } from "lucide-react";
import { useMemo, useState } from "react";
import * as Yup from "yup";
import ErrorMsg from "../auth/ErrorMsg";
import UserAvatar from "../shared/Avatar/UserAvatar";
import { Button } from "../ui/button";
import UploadsImages from "./UploadsImages";

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
          <UserAvatar data={data} />
          <Input
            readOnly
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
          <div className="space-y-2 flex  gap-2 flex-row justify-between">
            <UploadsImages
              files={files}
              removeImage={removeImage}
              formik={formik}
              isPending={isPending}
              handleChange={handleChange}
            />
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
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
