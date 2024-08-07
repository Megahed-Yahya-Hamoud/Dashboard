import classes from "./Lessons.module.css";
import { Box, Text, useComputedColorScheme } from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";
import {
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconPencil,
} from "@tabler/icons-react";
export default function Lessons() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  return (
    <Box w={"100%"}>
    <Box display={"flex"} style={{ justifyContent: "center" }}>
      {language != "English" ? (
        <Box className={classes.containerLesson} w={"100%"} my={100}>
          <Box display={"flex"} style={{ alignItems: "center" }}>
            <IconCaretLeftFilled
              style={{ width: "30px", height: "30px", color: "rgb(62,83,160)" }}
              stroke={2.0}
            />
            <Text fw={600} fz={25}>
              الكورس
            </Text>
          </Box>
          <Box mt={50} display={"grid"} style={{ gap: "2rem" }}>
            <Box
              className={
                computedColorScheme == "light"
                  ? classes.lesson
                  : classes.lessonDark
              }
              display={"flex"}
              style={{ alignItems: "center", gap: "2rem" }}
            >
              <Text className={classes.number}>01</Text>
              <Text className={classes.title}>مقدمة عن المنهج</Text>
              <IconPencil
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(0,162,255)",
                }}
                stroke={2.0}
              />
            </Box>

            <Box
              className={
                computedColorScheme == "light"
                  ? classes.lesson
                  : classes.lessonDark
              }
              display={"flex"}
              style={{ alignItems: "center", gap: "2rem" }}
            >
              <Text className={classes.number}>02</Text>
              <Text className={classes.title}> الباب الاول:الفراعنة</Text>
              <IconPencil
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(0,162,255)",
                }}
                stroke={2.0}
              />
            </Box>

            <Box
              className={
                computedColorScheme == "light"
                  ? classes.lesson
                  : classes.lessonDark
              }
              display={"flex"}
              style={{ alignItems: "center", gap: "2rem" }}
            >
              <Text className={classes.number}>03</Text>
              <Text className={classes.title}>
                {" "}
                الباب الثاني: التاريخ الاسلامي{" "}
              </Text>
              <IconPencil
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(0,162,255)",
                }}
                stroke={2.0}
              />
            </Box>

            <Box
              className={
                computedColorScheme == "light"
                  ? classes.lesson
                  : classes.lessonDark
              }
              display={"flex"}
              style={{ alignItems: "center", gap: "2rem" }}
            >
              <Text className={classes.number}>04</Text>
              <Text className={classes.title}>
                {" "}
                الباب الثالث: التاريخ الاموي{" "}
              </Text>
              <IconPencil
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(0,162,255)",
                }}
                stroke={2.0}
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box  dir="ltr" className={classes.containerLessonEn} w={"100%"} my={100}>
          <Box display={"flex"} style={{ alignItems: "center" }}>
            <IconCaretRightFilled
              style={{ width: "30px", height: "30px", color: "rgb(62,83,160)" }}
              stroke={2.0}
            />
            <Text fw={600} fz={25}>
              Course
            </Text>
          </Box>
          <Box mt={50} display={"grid"} style={{ gap: "2rem" }}>
            <Box
              className={
                computedColorScheme == "light"
                  ? classes.lesson
                  : classes.lessonDark
              }
              display={"flex"}
              style={{ alignItems: "center", gap: "2rem" }}
            >
              <Text className={classes.number}>01</Text>
              <Text className={classes.title}>
                Introduction to the curriculum{" "}
              </Text>
              <IconPencil
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(0,162,255)",
                }}
                stroke={2.0}
              />
            </Box>

            <Box
              className={
                computedColorScheme == "light"
                  ? classes.lesson
                  : classes.lessonDark
              }
              display={"flex"}
              style={{ alignItems: "center", gap: "2rem" }}
            >
              <Text className={classes.number}>02</Text>
              <Text className={classes.title}>
                {" "}
                Chapter One: Introduction to the Pharaohs
              </Text>
              <IconPencil
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(0,162,255)",
                }}
                stroke={2.0}
              />
            </Box>

            <Box
              className={
                computedColorScheme == "light"
                  ? classes.lesson
                  : classes.lessonDark
              }
              display={"flex"}
              style={{ alignItems: "center", gap: "2rem" }}
            >
              <Text className={classes.number}>03</Text>
              <Text className={classes.title}>
                {" "}
                Chapter two: Islamic history{" "}
              </Text>
              <IconPencil
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(0,162,255)",
                }}
                stroke={2.0}
              />
            </Box>

            <Box
              className={
                computedColorScheme == "light"
                  ? classes.lesson
                  : classes.lessonDark
              }
              display={"flex"}
              style={{ alignItems: "center", gap: "2rem" }}
            >
              <Text className={classes.number}>04</Text>
              <Text className={classes.title}>
                {" "}
                Chapter three: Umayyad history{" "}
              </Text>
              <IconPencil
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(0,162,255)",
                }}
                stroke={2.0}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
    </Box>
  );
}
