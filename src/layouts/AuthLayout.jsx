import AuthNavbar from "@/components/shared/AuthNavBar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <AuthNavbar />
      <Outlet />
    </>
  );
};

export default AuthLayout;
