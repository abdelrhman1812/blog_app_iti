import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import useLogin from "@/hooks/Actions/auth/useLogin";
import { useFormik } from "formik";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import CardLogo from "../shared/CardLogo";
import BtnSubmit from "./BtnSubmit";
import ErrorMsg from "./ErrorMsg";
import FooterForm from "./FooterForm";
import HeaderForm from "./HeaderForm";

const LoginForm = () => {
  const { mutate, isPending } = useLogin();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/auth/register");
  };

  const handleSubmit = (values) => {
    mutate({ data: values });
  };

  let validationSchema = useMemo(() => {
    return Yup.object({
      email: Yup.string()
        .email("Enter a valid Email")
        .required("Email must be required"),
      password: Yup.string()
        // .min(5, "Password must be more than 5 characters")
        .required("Enter Your Password"),
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });
  return (
    <div className="w-full md:w-1/2 p-8 md:p-12 ">
      <div className="max-w-md mx-auto mt-10">
        <CardLogo />

        <HeaderForm
          title="Login to your account"
          description={" Join BlogApp and start sharing your stories"}
        />

        <form onSubmit={formik.handleSubmit} className="space-y-5">
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
                placeholder="Create a password"
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

          <Link
            to="/auth/forgot-password"
            className="text-sm text-primary block hover:text-primary/90 hover:underline transition-colors duration-200"
            aria-label="Reset your password"
          >
            Forgot Password?
          </Link>

          <BtnSubmit formik={formik} isPending={isPending} text="Sign in" />
        </form>

        <div className="mt-6">
          <Separator />

          <FooterForm
            title={"Don't have an account?"}
            actionBtn={handleNavigate}
            linkTitle="Sign Up"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
