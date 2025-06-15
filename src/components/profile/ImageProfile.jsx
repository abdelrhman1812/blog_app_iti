import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { usePatchUserImageProfile } from "@/hooks/Actions/users/useUsersCurds";

import { Check, Upload, X } from "lucide-react";
import { useState } from "react";

import imgUser from "../../assets/images/user-img.svg";

const ImageProfile = ({ data }) => {
  const { user: userAuth } = useAuth();

  const [file, setFile] = useState(null);
  const [fileObject, setFileObject] = useState(null);
  const { mutate } = usePatchUserImageProfile();

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("image", fileObject);

    mutate(
      { data: formData },
      {
        onSuccess: () => {
          setFile(null);
          setFileObject(null);
          URL.revokeObjectURL(file);
        },
      }
    );
  };
  const handleImageChange = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    console.log(e.target.files[0]);
    setFile(url);
    setFileObject(e.target.files[0]);
  };

  const handleRemoveImage = () => {
    URL.revokeObjectURL(file);
    setFile(null);
    setFileObject(null);
  };
  return (
    <div className="relative">
      <div className="w-50 h-50 rounded-full mx-auto overflow-hidden border-2 border-gray-200">
        {file ? (
          <img
            src={file}
            alt="Preview"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <Avatar className="w-full h-full">
            <AvatarImage
              className="w-full h-full object-cover rounded-full"
              src={data?.user?.image?.secure_url || imgUser}
              alt={data?.user?.useName}
            />
            <AvatarFallback className="text-2xl">
              {data?.user?.useName?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
        )}
      </div>

      {userAuth?.id === data?.user?._id && (
        <div className="absolute -bottom-2 left-1/2 md:left-auto md:-right-2 flex flex-col space-y-1">
          {/* Upload Image Button */}
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
            id="image"
          />
          <Label
            htmlFor="image"
            className="rounded-full flex items-center justify-center  w-8 h-8 p-0 bg-primary hover:bg-primary"
          >
            <Upload className="w-4 h-4 text-center text-white" />
          </Label>

          {fileObject && (
            <Button
              size="sm"
              className="rounded-full w-8 h-8 p-0 bg-green-500 hover:bg-green-600"
              onClick={handleSubmit}
              title="Submit Image"
            >
              <Check className="w-4 h-4" />
            </Button>
          )}

          {fileObject && (
            <Button
              size="sm"
              className="rounded-full w-8 h-8 p-0 bg-red-500 hover:bg-red-600"
              onClick={handleRemoveImage}
              title="Remove Image"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageProfile;
