import BtnSubmit from "@/components/auth/BtnSubmit";
import ErrorMsg from "@/components/auth/ErrorMsg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForgotPassword } from "@/hooks/Actions/users/useUserAuth";
import { useFormik } from "formik";
import { ArrowLeft, Mail } from "lucide-react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useForgotPassword();

  const handleForgotPassword = (values) => {
    mutate(
      { data: values },
      {
        onSuccess: () => {
          navigate("/auth/reset-password");
        },
      }
    );
  };
  let validationSchema = useMemo(() => {
    return Yup.object({
      email: Yup.string()
        .email("Enter a valid Email")
        .required("Email must be required"),
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: handleForgotPassword,
    validationSchema,
  });

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Forgot Password?</CardTitle>
          <p className="text-gray-600">
            Enter your email to receive a password reset link.
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
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

            {/* <Button type="submit" className="w-full">
              Send Code
            </Button> */}
            <BtnSubmit formik={formik} isPending={isPending} text="Send Code" />
          </form>
          <Button
            onClick={() => navigate("/auth/login")}
            variant="ghost"
            className="w-full mt-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
