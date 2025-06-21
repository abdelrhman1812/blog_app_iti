import ProtectedAuth from "@/components/protected/ProtectedAuth";
import ProtectedRoute from "@/components/protected/ProtectedRoute";
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import FollowerPage from "@/pages/FollowerPage";
import ForgotPassword from "@/pages/ForgotPassword";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import Register from "@/pages/Register";
import ResetPassword from "@/pages/ResetPassword";
import SuggestedPeople from "@/pages/SuggestedPeople";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

const MainRoutes = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "profile/:id",
          element: <Profile />,
        },
        {
          path: "followers",
          element: <FollowerPage />,
        },
        {
          path: "suggested-people",
          element: <SuggestedPeople />,
        },
      ],
    },
    {
      path: "/auth",
      element: (
        <ProtectedAuth>
          <AuthLayout />
        </ProtectedAuth>
      ),
      children: [
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default MainRoutes;
