import { useUpdateUserData } from "@/hooks/Actions/users/useUsersCurds";
import { useFormik } from "formik";
import { useMemo, useState } from "react";
import * as Yup from "yup";
import FormUpdateUserData from "./FormUpdateUserData";
import UserDataItems from "./UserDataItems";

const UserData = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { mutate, isPending: pending } = useUpdateUserData();

  const handleSubmit = (values) => {
    const filteredValues = { ...values };

    if (!filteredValues.phone?.trim()) delete filteredValues.phone;
    if (!filteredValues.address?.trim()) delete filteredValues.address;
    if (!filteredValues.bio?.trim()) delete filteredValues.bio;

    mutate(
      {
        data: filteredValues,
      },
      {
        onSuccess: () => {
          setIsEditing(false);
        },
      }
    );
  };

  const validationSchema = useMemo(() => {
    let phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    return Yup.object({
      userName: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(20, "Name must be less than 20 characters"),
      email: Yup.string().email("Enter a valid email"),
      phone: Yup.string()
        .matches(phoneRegExp, "Enter an Egyptian Number")
        .required("Phone is required"),

      address: Yup.string(),
      bio: Yup.string().max(100, "Bio must be less than 100 characters"),
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      userName: data?.user?.userName || "",
      email: data?.user?.email || "",
      phone: data?.user?.phone || "",
      address: data?.user?.address || "",
      bio: data?.user?.bio || "",
    },
    validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    formik.resetForm();
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <FormUpdateUserData
          formik={formik}
          handleCancel={handleCancel}
          pending={pending}
        />
      ) : (
        <UserDataItems data={data} handleEditClick={handleEditClick} />
      )}
    </>
  );
};

export default UserData;
