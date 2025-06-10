import ProtectedAuth from "@/components/protected/ProtectedAuth";
import ProtectedRoute from "@/components/protected/ProtectedRoute";
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import Register from "@/pages/Register";
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
          index: true,
          path: "/:id",
          element: <Profile />,
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
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default MainRoutes;
