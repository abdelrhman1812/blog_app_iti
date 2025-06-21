import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import useRegister from "@/hooks/Actions/auth/useRegister";
import { useFormik } from "formik";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import CardLogo from "../shared/CardLogo";
import BtnSubmit from "./BtnSubmit";
import ErrorMsg from "./ErrorMsg";
import FooterForm from "./FooterForm";
import HeaderForm from "./HeaderForm";
const RegisterForm = () => {
  const { mutate, isSuccess, isPending } = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    mutate({ data: values });
  };
  const handleNavigate = useCallback(() => {
    navigate("/auth/login");
  }, [navigate]);

  useEffect(() => {
    if (isSuccess) {
      handleNavigate();
    }
  }, [handleNavigate, isSuccess]);

  let validationSchema = useMemo(() => {
    return Yup.object({
      userName: Yup.string()
        .min(3, "Your Name Must be More than 3 characters")
        .max(10, "Your Name Must be less than 10 characters")
        .required("Name must be required"),
      email: Yup.string()
        .email("Enter a valid Email")
        .required("Email must be required"),
      password: Yup.string()
        // .min(5, "Password must be more than 5 characters")

        // .matches(
        //   /^[A-Z][a-z0-9]{3,40}$/,
        //   "Password must start with an uppercase letter and be more than 5 characters"
        // )
        .required("Enter Your Password"),
      confirmPassword: Yup.string()
        .oneOf(
          [Yup.ref("password")],
          "Confirm Password must be equal to Password"
        )
        .required("Confirm Password must be required"),
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <div className="w-full md:w-1/2 p-8 md:p-12 ">
      <div className="max-w-md mx-auto">
        <CardLogo />

        <HeaderForm
          title="Create your account"
          description={" Join BlogApp and start sharing your stories"}
        />

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="userName"
                name="userName"
                type="text"
                placeholder="Enter your full name"
                className="pl-10"
                onChange={formik.handleChange}
                value={formik.values.userName}
                onBlur={formik.handleBlur}
              />
            </div>

            <ErrorMsg formik={formik} type={"userName"} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="pl-10"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
            </div>
            <ErrorMsg formik={formik} type={"email"} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pl-10 pr-10"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </Button>
            </div>
            <ErrorMsg formik={formik} type={"password"} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="pl-10 pr-10"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </Button>
            </div>
            <ErrorMsg formik={formik} type={"confirmPassword"} />
          </div>

          <BtnSubmit formik={formik} isPending={isPending} text="Sign Up" />
        </form>

        <div className="mt-6">
          <Separator />

          <button onClick={handleNavigate}></button>
          <FooterForm
            title={"Already have an account?"}
            actionBtn={handleNavigate}
            linkTitle=" Sign in"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
