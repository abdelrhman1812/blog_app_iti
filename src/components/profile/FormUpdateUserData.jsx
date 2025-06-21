import { Link, Mail, MapPin, Phone, Text, User } from "lucide-react";

import BtnSubmit from "../auth/BtnSubmit";
import ErrorMsg from "../auth/ErrorMsg";
import BtnCancel from "../shared/btnCancel";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const FormUpdateUserData = ({ formik, handleCancel, pending }) => {
  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      {/* User Name  */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <User className="w-4 h-4 text-gray-500" />
          <Input
            name="userName"
            id="userName"
            type="text"
            className={`text-xl font-bold ${
              formik.touched.userName && formik.errors.userName
                ? "border-destructive focus:ring-destructive"
                : ""
            }`}
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="text-center">
          <ErrorMsg formik={formik} type={"userName"} />
        </div>
      </div>

      {/* Email and Phone  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email  */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-gray-500" />
            <Input
              name="email"
              type="email"
              className={
                formik.touched.email && formik.errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : ""
              }
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="text-center">
            <ErrorMsg formik={formik} type={"email"} />
          </div>
        </div>

        {/* Phone  */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-gray-500" />
            <Input
              name="phone"
              type="tel"
              id="phone"
              className={
                formik.touched.phone && formik.errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : ""
              }
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
        <div className="text-center">
          <ErrorMsg formik={formik} type={"phone"} />
        </div>
      </div>

      {/* Address  */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          <Input
            name="address"
            className={
              formik.touched.address && formik.errors.address
                ? "border-red-500 focus:ring-red-500"
                : ""
            }
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="text-center">
          <ErrorMsg formik={formik} type={"address"} />
        </div>
      </div>

      {/* Bio */}

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Text className="w-4 h-4 text-gray-500" />
          <Textarea
            name="bio"
            className={
              formik.touched.bio && formik.errors.bio
                ? "border-red-500 focus:ring-red-500"
                : ""
            }
            value={formik.values.bio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="text-center">
          <ErrorMsg formik={formik} type={"bio"} />
        </div>
      </div>

      {/* Link Profile  */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Link className="w-4 h-4 text-gray-500" />
          <Input
            name="linkProfile"
            className={
              formik.touched.linkProfile && formik.errors.linkProfile
                ? "border-destructive focus:ring-destructive"
                : ""
            }
            value={formik.values.linkProfile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="text-center">
          <ErrorMsg formik={formik} type={"linkProfile"} />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 pt-4">
        <div className="flex-1">
          <BtnSubmit formik={formik} isPending={pending} text={"Save"} />
        </div>
        <BtnCancel handleCancel={handleCancel} text={"Cancel"} />
      </div>
    </form>
  );
};

export default FormUpdateUserData;
