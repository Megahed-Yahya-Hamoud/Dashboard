export interface IStudentRegister {
  Year: "FirstYear" | "SecondYear" | "ThirdYear";
  ImgIdentity: File | null;
  Location: string;
  Email: string;
  FatherPhone: string;
  Phone: string;
  Img: File | null;
  FirstName: string;
  LastName: string;
  Password: string;
  ConfirmPassword: string;
  Specialization: "literary" | "Mathematical" | "scientific" | "";
  Gender: "male" | "female";
}

export interface IUserLogin {
  Email: string;
  Password: string;
}

export interface IAuthModel {
  accessTokenExpireOn: Date | null;
  email: string;
  isAuthenticated: boolean;
  message: string | null;
  refrashToken: string;
  refreshTokenExpiresOn: Date | null;
  roles: string[];
  token: string;
  username: string | null;
  userId: string | null;
}
