/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { ConfirmEmail, SignIn, LogIn } from "@store/slices/AuthSlice";
import { Api } from "@utilities/Api";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";
import { getStudent } from "@store/slices/StudentSlice";
import { IResetPassword } from "@utilities/interfaces/PublicInterfce";
export const SignInApi = (Data: FormData) => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      dispatch(SignIn({ IsLoading: true, IsRegistered: false }));
      const { data } = await Api.post("Auth/register", Data);
      dispatch(SignIn({ IsLoading: false, IsRegistered: true }));
      toast.success(data);
    } catch (error: any) {
      dispatch(SignIn({ IsLoading: false }));
      if (Array.isArray(error?.response.data)) {
        if (error?.response.data[0].description) {
          let errorMessage = "";
          error?.response.data.forEach(
            (element: { code: string; description: string }) => {
              console.log(element);

              errorMessage += element.description;
            }
          );
          toast.error(errorMessage);
          return;
        }
        toast.error(error?.response.data.join(", "));
        return;
      }
      toast.error(error?.response.data.message);
    }
  };
};

export const verifyEmail = (token: string, email: string) => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      const { data } = await Api.post(`/Auth/confirmEmail`, {
        token: token,
        email: email,
      });
      console.log(data.message);
      dispatch(ConfirmEmail({ status: true, message: data.message }));
    } catch (error: any) {
      dispatch(
        ConfirmEmail({ status: true, message: error?.response.data.message })
      );

      toast.error(error?.response.data.message);
    }
  };
};

export const LoginApi = (email: string, password: string) => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      const { data } = await Api.post(`/Auth/login`, { email, password });
      const cookies = new Cookies();
      const expires = new Date(data.refreshTokenExpiresOn);
      if (isNaN(expires.getTime())) {
        throw new Error(
          `Invalid expiration date: ${data.refreshTokenExpiresOn}`
        );
      }

      cookies.set("refreshToken", data.refrashToken, {
        path: "/",
        expires: expires,
      });

      cookies.set("authModel", JSON.stringify(data), {
        path: "/",
        expires: expires,
      });

      console.log(cookies.get("authModel"));
      dispatch(LogIn(data));
      toast.success("تم تسجيل الدخول بنجاح");
    } catch (error: any) {
      console.error("Error during login:", error);
      toast.error(error?.response?.data?.message || "Login failed");
    }
  };
};

export const LogOut = () => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      const cookies = new Cookies();
      cookies.remove("RefreashToken", { path: "/" });
      cookies.remove("refreshToken", { path: "/" });
      cookies.remove("authModel", { path: "/" });
      localStorage.removeItem("student");
      dispatch(LogIn(null));
      dispatch(getStudent(null));
      toast.success("تم تسجيل الخروج");
    } catch (error) {
      console.log(error);
    }
  };
};

export const ForgetPasswordApi = (email: string) => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      const { data } = await Api.post("Auth/forgetpassword", { email: email });
      console.log(data);
      toast.success(data.message);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Error in ForgetPassword");
    }
  };
};

export const ResetPasswordApi = (obj: IResetPassword) => {
  return async (dispatch: Dispatch<PayloadAction<boolean>>) => {
    try {
      const { data } = await Api.post("Auth/resetpassword", obj);
      toast.success(data.message);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "فشل اعاده تعيين كلمه السر"
      );
    }
  };
};

// export const RefreshAccessToken = () => {
//   return async (Dispatch: Dispatch<PayloadAction<boolean>>) => {
//     try {
//       const cookies = new Cookies();
//       const refreshToken = cookies.get("refreshToken");
//       console.log(encodeURIComponent(refreshToken));

//       const { data } = await Api.get("Auth/refreshToken", {
//         headers: {
//           Cookie: `refreshToken=${encodeURIComponent(refreshToken)}`,
//         },
//       });
//     } catch (error: any) {
//       console.error("Error during login:", error);
//       toast.error(error?.response?.data?.message || "refresh token failed");
//     }
//   };
// };
