import MainLayout from "@layouts/MainLayout";
import HomePage from "@pages/Home/HomePage";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./../pages/error/ErrorPage";
import { MantineProvider } from "@mantine/core";
import SigninUser from "@pages/signinUser/SigninUser";
import LoginUser from "@pages/loginUser/LoginUser";

import { useSelector } from "react-redux";
import { RootState } from "@store/Store";
import ForgetPassword from "@pages/forgetPassword/ForgetPassword";
import ResetPassword from "@pages/resetPassowrd/ResetPassword";
import { Courses } from "@pages/courses/Courses";
import Lessons from "@pages/lesson/Lessons";
import Students from "@pages/student/Students";
import Settings from "@pages/settings/Settings";

export default function AppRouter() {
  const { _ , AuthModel } = useSelector(
    (state: RootState) => state.Auth
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/courses",
          element:<Courses/>
        },
        {
          path: "/lessons",
          element:<Lessons/>
        },
        {
          path: "/students",
          element:<Students/>
        },
        {
          path: "/settings",
          element:<Settings/>
        },
        
        {
          path: "/signin",
          element: AuthModel ? <Navigate to={"/"} /> : <SigninUser />,
        },
        {
          path: "/login",
          element: AuthModel ? <Navigate to={"/"} /> : <LoginUser />,
        },

        
        {
          path: "/forget-password",
          element: <ForgetPassword />,
        },
        {
          path: "/reset-password",
          element: <ResetPassword />,
        },
      ],
    },
  ]);
//comment
  return (
    <MantineProvider>
      <RouterProvider router={router}></RouterProvider>
    </MantineProvider>
  );
}
