import BtnSubmit from "@/components/auth/BtnSubmit";
import ErrorMsg from "@/components/auth/ErrorMsg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useResetPassword } from "@/hooks/Actions/users/useUserAuth";
import { useFormik } from "formik";
import { ArrowLeft, Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { mutate, isPending } = useResetPassword();

  const handleResetPassword = (values) => {
    mutate(
      {
        data: {
          email: values.email,
          code: values.code,
          newPassword: values.password,
        },
      },
      {
        onSuccess: () => {
          formik.resetForm();
          navigate("/auth/login");
        },
      }
    );
  };
  let validationSchema = useMemo(() => {
    return Yup.object({
      email: Yup.string()
        .email("Enter a valid Email")
        .required("Email must be required"),
      code: Yup.string().required("Code must be required"),
      password: Yup.string().required("Enter Your Password"),
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
      email: "",
      code: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: handleResetPassword,
    validationSchema,
  });
  return (
    <div className="min-h-screen ">
      <div className="flex items-center justify-center py-12">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Reset Your Password</CardTitle>
              <p className="text-gray-600 mt-2">
                Enter the verification code sent to your email and create a new
                password.
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              <form onSubmit={formik.handleSubmit} className="space-y-4">
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
                  <Label htmlFor="code">Verification Code</Label>
                  <div className="relative">
                    <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="code"
                      type="text"
                      placeholder="Enter 6-digit code"
                      className="pl-10 text-center tracking-widest"
                      onChange={formik.handleChange}
                      value={formik.values.code}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <ErrorMsg formik={formik} type={"code"} />
                </div>

                {/* Password */}
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

                {/* Confirm Password */}
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
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
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

                <BtnSubmit
                  formik={formik}
                  isPending={isPending}
                  text={"Reset Password"}
                />
              </form>

              <Button
                onClick={() => navigate("/auth/forgot-password")}
                variant="ghost"
                className="w-full mt-4 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Send Code
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
