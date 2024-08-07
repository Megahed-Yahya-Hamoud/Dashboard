import classes from "./Courses.module.css";
import { Link } from "react-router-dom";
import { IconCirclePlus } from "@tabler/icons-react";
import { Box, Table, useComputedColorScheme } from "@mantine/core";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";

const dataAr = [
  {
    name: "التاريخ هويتنا",
    material: "التاريخ",
    teacher: "احمد كامل",
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: "التاريخ هويتنا",
    material: "التاريخ",
    teacher: "احمد كامل",
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: "التاريخ هويتنا",
    material: "التاريخ",
    teacher: "احمد كامل",
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: "التاريخ هويتنا",
    material: "التاريخ",
    teacher: "احمد كامل",
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: "التاريخ هويتنا",
    material: "التاريخ",
    teacher: "احمد كامل",
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: "التاريخ هويتنا",
    material: "التاريخ",
    teacher: "احمد كامل",
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: "التاريخ هويتنا",
    material: "التاريخ",
    teacher: "احمد كامل",
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: "التاريخ هويتنا",
    material: "التاريخ",
    teacher: "احمد كامل",
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: "التاريخ هويتنا",
    material: "التاريخ",
    teacher: "احمد كامل",
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: "التاريخ هويتنا",
    material: "التاريخ",
    teacher: "احمد كامل",
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: "التاريخ هويتنا",
    material: "التاريخ",
    teacher: "احمد كامل",
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
  {
    name: "التاريخ هويتنا",
    material: "التاريخ",
    teacher: "احمد كامل",
    classe: "الاول",
    division: "ادبي",
    date: "15/11/2023",
  },
];

const dataEn = [
  {
    name: "History and our identity ",
    material: "History",
    teacher: " Ahmed Kamel",
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "History and our identity ",
    material: "History",
    teacher: " Ahmed Kamel",
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "History and our identity ",
    material: "History",
    teacher: " Ahmed Kamel",
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "History and our identity ",
    material: "History",
    teacher: " Ahmed Kamel",
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "History and our identity ",
    material: "History",
    teacher: " Ahmed Kamel",
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "History and our identity ",
    material: "History",
    teacher: " Ahmed Kamel",
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "History and our identity ",
    material: "History",
    teacher: " Ahmed Kamel",
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "History and our identity ",
    material: "History",
    teacher: " Ahmed Kamel",
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "History and our identity ",
    material: "History",
    teacher: " Ahmed Kamel",
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "History and our identity ",
    material: "History",
    teacher: " Ahmed Kamel",
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "History and our identity ",
    material: "History",
    teacher: " Ahmed Kamel",
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
  {
    name: "History and our identity ",
    material: "History",
    teacher: " Ahmed Kamel",
    classe: "The first",
    division: "Literary",
    date: "15/11/2023",
  },
];

const headerAr = [
  "الاسم",
  "المادة",
  " المعلم",
  "الفصل",
  "الشعبة",
  "تاريخ الاضافة",
];

const headerEn = [
  "Name",
  "Material",
  " Teacher",
  "Class",
  "Division",
  " Date of addition",
];

export function Courses() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { language } = useLanguage();

  const rowsAr = dataAr.map((element, index) => (
    <Table.Tr
      c={
        computedColorScheme == "light"
          ? "black"
          : (index + 1) % 2 == 0
          ? "black"
          : "white"
      }
      bg={
        computedColorScheme == "light"
          ? (index + 1) % 2 == 0
            ? "rgb(178,185,212)"
            : ""
          : (index + 1) % 2 == 0
          ? "white"
          : ""
      }
      styles={{ tr: { border: "0px" } }}
      key={element.name}
    >
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.name}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.material}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.teacher}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.classe}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.division}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.date}
      </Table.Td>
    </Table.Tr>
  ));

  const rowsEn = dataEn.map((element, index) => (
    <Table.Tr
      dir="ltr"
      c={
        computedColorScheme == "light"
          ? "black"
          : (index + 1) % 2 == 0
          ? "black"
          : "white"
      }
      bg={
        computedColorScheme == "light"
          ? (index + 1) % 2 == 0
            ? "rgb(178,185,212)"
            : ""
          : (index + 1) % 2 == 0
          ? "white"
          : ""
      }
      styles={{ tr: { border: "0px" } }}
      key={element.name}
    >
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.name}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.material}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.teacher}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.classe}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.division}
      </Table.Td>
      <Table.Td fw={600} styles={{ td: { padding: "20px" } }}>
        {element.date}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box
      dir={language != "English" ? "" : "ltr"}
      className={classes.containerTable}
    >
      {language != "English" ? (
        <>
          <Box display={"flex"} style={{ justifyContent: "start" }}>
            <Box mb={50} display={"flex"} style={{ justifyContent: "start" }}>
              <Link to={"/"} className={classes.addCourse}>
                اضافة كورس
                <IconCirclePlus
                  style={{ width: "25px", height: "25px" }}
                  stroke={2.0}
                />
              </Link>
            </Box>
          </Box>
          <Box>
            <Table.ScrollContainer
              className={classes.table}
              minWidth={500}
              type="native"
            >
              <Table>
                <Table.Thead styles={{ thead: { borderRadius: "50px" } }}>
                  <Table.Tr
                    style={{
                      backgroundColor: "rgb(62,83,160)",
                    }}
                    styles={{ tr: { border: "0px" } }}
                  >
                    {headerAr.map((item, index) => (
                      <Table.Th
                        c={"white"}
                        styles={{ th: { padding: "20px" } }}
                        key={index}
                      >
                        {item}
                      </Table.Th>
                    ))}
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rowsAr}</Table.Tbody>
              </Table>
            </Table.ScrollContainer>
          </Box>
        </>
      ) : (
        <>
          <Box display={"flex"} style={{ justifyContent: "start" }}>
            <Box mb={50} display={"flex"} style={{ justifyContent: "start" }}>
              <Link to={"/"} className={classes.addCourse}>
                Add Courses
                <IconCirclePlus
                  style={{ width: "25px", height: "25px" }}
                  stroke={2.0}
                />
              </Link>
            </Box>
          </Box>
          <Box dir="ltr">
            <Table.ScrollContainer
              dir="ltr"
              className={classes.table}
              minWidth={500}
              type="native"
            >
              <Table dir="ltr">
                <Table.Thead
                  dir="ltr"
                  styles={{ thead: { borderRadius: "50px" } }}
                >
                  <Table.Tr
                    dir="ltr"
                    style={{
                      backgroundColor: "rgb(62,83,160)",
                    }}
                    styles={{ tr: { border: "0px" } }}
                  >
                    {headerEn.map((item, index) => (
                      <Table.Th
                        dir="ltr"
                        ta={"left"}
                        c={"white"}
                        styles={{ th: { padding: "20px" } }}
                        key={index}
                      >
                        {item}
                      </Table.Th>
                    ))}
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rowsEn}</Table.Tbody>
              </Table>
            </Table.ScrollContainer>
          </Box>
        </>
      )}
    </Box>
  );
}
