import MainLayout from "@layouts/MainLayout";
import HomePage from "@pages/Home/HomePage";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./../pages/error/ErrorPage";
import { MantineProvider } from "@mantine/core";


import { Courses } from "@pages/courses/Courses";
import Lessons from "@pages/lesson/Lessons";
import Students from "@pages/student/Students";
import Settings from "@pages/settings/Settings";

export default function AppRouter() {
  // const { IsConfirmed , AuthModel } = useSelector(
  //   (state: RootState) => state.Auth
  // );

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
