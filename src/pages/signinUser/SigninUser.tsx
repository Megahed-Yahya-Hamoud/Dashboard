import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./SigninUser.module.css";
import { Box, Container, Text, useComputedColorScheme } from "@mantine/core";
import { useFormik } from "formik";
import signUpSchema from "@schemas/signUpSchema";
import { motion } from "framer-motion";
import { FaImages } from "react-icons/fa6";
import { IStudentRegister } from "@utilities/interfaces/AuthInterface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { SignInApi } from "@store/api/AuthApi";
import Spinner from "@shared/spineer/Spinner";
import Swal from "sweetalert2";

const depratmets = [
  {
    name: "ادبي",
    value: "literary",
  },
  {
    name: "علم علوم",
    value: "scientific",
  },
  {
    name: " علم رياضه",
    value: "Mathematical",
  },
];
const Years = [
  {
    name: "الاول الثانوي",
    value: "FirstYear",
  },
  {
    name: "الثاني الثانوي",
    value: "SecondYear",
  },
  {
    name: "الثالث الثانوي",
    value: "ThirdYear",
  },
];
const gender = [
  {
    name: "ذكر",
    value: "male",
  },
  {
    name: "أنثى",
    value: "female",
  },
];

export default function SigninUser() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { IsLoading } = useSelector((state: RootState) => state.Auth);
  const initialValues: IStudentRegister = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Phone: "",
    Location: "",
    Gender: "male",
    FatherPhone: "",
    Specialization: "",
    Img: null,
    ImgIdentity: null,
    Year: "ThirdYear",
  };
  const dispatch = useDispatch<AppDispatch>();
  const { IsRegistered } = useSelector((state: RootState) => state.Auth);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values: IStudentRegister) => {
      const formData = new FormData();
      formData.append("FirstName", values.FirstName);
      formData.append("LastName", values.LastName);
      formData.append("Email", values.Email);
      formData.append("Password", values.Password);
      formData.append("ConfirmedPassword", values.ConfirmPassword);
      formData.append("Phone", values.Phone);
      formData.append("Location", values.Location);
      formData.append("Gender", values.Gender);
      formData.append("FatherPhone", values.FatherPhone);
      formData.append("Specialization", values.Specialization);
      formData.append("Year", values.Year);
      if (values.Img && values.ImgIdentity) {
        formData.append("Img", values.Img);
        formData.append("ImgIdentity", values.ImgIdentity);
      }
      dispatch(SignInApi(formData));
    },
  });
  useEffect(() => {
    if (IsRegistered) {
      Swal.fire({
        title: "من فضلك سجل الدخول",
        text: "هل تريد تسحيل الدخول!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "تسجيل الدخول",
        cancelButtonText: "إلغاء",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  }, [IsRegistered]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {IsLoading && <Spinner />}
      <Box display={"grid"} style={{ justifyContent: "center" }}>
        <Container my={50} display={"grid"} style={{ gap: "1rem" }}>
          <Text
            className={
              computedColorScheme === "light"
                ? classes.titleLight
                : classes.titleDark
            }
            ta={"center"}
            fz={30}
            fw={700}
            c={"#408fff"}>
            انشاء حساب
          </Text>
          <form
            className={classes.form}
            noValidate
            onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="FirstName"
              placeholder="الاسم الاول"
              className={classes.input}
              value={formik.values.FirstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.FirstName && formik.errors.FirstName ? (
              <Text c="red">{formik.errors.FirstName}</Text>
            ) : null}
            <input
              type="text"
              name="LastName"
              placeholder="الاسم الثاني"
              className={classes.input}
              value={formik.values.LastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.LastName && formik.errors.LastName ? (
              <Text c="red">{formik.errors.LastName}</Text>
            ) : null}
            <Box display={"flex"} style={{ gap: "1rem" }}>
              <div>
                <input
                  type="text"
                  name="Phone"
                  placeholder="رقم الهاتف"
                  style={{ width: "100%" }}
                  className={classes.input}
                  value={formik.values.Phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.Phone && formik.errors.Phone ? (
                  <Text c="red">{formik.errors.Phone}</Text>
                ) : null}
              </div>
              <div>
                <input
                  type="text"
                  name="FatherPhone"
                  placeholder="رقم هاتف ولي الامر"
                  style={{ width: "100%" }}
                  className={classes.input}
                  value={formik.values.FatherPhone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.FatherPhone && formik.errors.FatherPhone ? (
                  <Text c="red">{formik.errors.FatherPhone}</Text>
                ) : null}
              </div>
            </Box>
            <input
              type="email"
              name="Email"
              placeholder="البريد الالكتروني"
              className={classes.input}
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Email && formik.errors.Email ? (
              <Text c="red">{formik.errors.Email}</Text>
            ) : null}
            <input
              type="text"
              name="Location"
              placeholder=" المكان"
              className={classes.input}
              value={formik.values.Location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Location && formik.errors.Location ? (
              <Text c="red">{formik.errors.Location}</Text>
            ) : null}
            <select
              name="Year"
              onChange={formik.handleChange}
              value={formik.values.Year}
              onBlur={formik.handleBlur}
              className={classes.input}>
              {Years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.name}
                </option>
              ))}
            </select>
            {formik.touched.Year && formik.errors.Year ? (
              <Text c="red">{formik.errors.Year}</Text>
            ) : null}

            <select
              name="Specialization"
              onChange={formik.handleChange}
              value={formik.values.Specialization}
              onBlur={formik.handleBlur}
              className={classes.input}>
              {depratmets.map((depratment) => (
                <option key={depratment.value} value={depratment.value}>
                  {depratment.name}
                </option>
              ))}
            </select>

            {formik.touched.Specialization && formik.errors.Specialization ? (
              <Text c="red">{formik.errors.Specialization}</Text>
            ) : null}
            <select
              name="Gender"
              onChange={formik.handleChange}
              value={formik.values.Gender}
              onBlur={formik.handleBlur}
              className={classes.input}>
              {gender.map((ge) => (
                <option key={ge.value} value={ge.value}>
                  {ge.name}
                </option>
              ))}
            </select>

            {formik.touched.Gender && formik.errors.Gender ? (
              <Text c="red">{formik.errors.Gender}</Text>
            ) : null}
            <label
              className={`${classes.input} ${classes.LapelImg}`}
              htmlFor="ImgIdentity">
              شهاده الميلاد من فضلك
              <span>
                <FaImages />
              </span>
            </label>
            <input
              type="file"
              name="ImgIdentity"
              id="ImgIdentity"
              hidden
              onChange={(event) => {
                formik.setFieldValue(
                  "ImgIdentity",
                  event.currentTarget.files?.[0] || null
                );
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.ImgIdentity && formik.errors.ImgIdentity ? (
              <Text c="red">{formik.errors.ImgIdentity}</Text>
            ) : null}
            <label
              className={`${classes.input} ${classes.LapelImg}`}
              htmlFor="Img">
              صوره للبروفايل الخاص بك
              <span>
                <FaImages />
              </span>
            </label>
            <input
              type="file"
              name="Img"
              hidden
              id="Img"
              className={classes.input}
              onChange={(event) => {
                formik.setFieldValue(
                  "Img",
                  event.currentTarget.files?.[0] || null
                );
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Img && formik.errors.Img ? (
              <Text c="red">{formik.errors.Img}</Text>
            ) : null}

            <input
              type="password"
              name="Password"
              placeholder="كلمة المرور"
              className={classes.input}
              value={formik.values.Password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Password && formik.errors.Password ? (
              <Text c="red">{formik.errors.Password}</Text>
            ) : null}
            <input
              type="password"
              name="ConfirmPassword"
              placeholder="تأكيد كلمة المرور"
              className={classes.input}
              value={formik.values.ConfirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? (
              <Text c="red">{formik.errors.ConfirmPassword}</Text>
            ) : null}
            <Box mt={10} display={"grid"} style={{ justifyContent: "center" }}>
              <button type="submit" className={classes.btnSumbit}>
                انشاء حساب
              </button>
            </Box>
            <Text fz={15} ta={"center"}>
              لديك حساب ؟{" "}
              <Link
                style={{ color: "#408fff", marginRight: "5px" }}
                to={"/login"}>
                تسجيل الدخول
              </Link>
            </Text>
          </form>
        </Container>
      </Box>
    </motion.div>
  );
}
