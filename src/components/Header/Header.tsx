import { useState } from "react";
import {
  UnstyledButton,
  Tooltip,
  rem,
  Box,
  Button,
  Drawer,
  ScrollArea,
  Divider,
  Group,
  Burger,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconAppsFilled,
  IconDeviceDesktop,
  IconClipboardList,
  IconSchool,
  IconCurrencyDollar,
  IconUserFilled,
  IconBrandSamsungpass,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
// import { MantineLogo } from "@mantinex/mantine-logo";
import logo from "@assets/Alsafwa/12.png";
import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import imageNav from "@assets/Alsafwa/11.png";
import imageTeacher from "@assets/Alsafwa/RetratoTwo.png";
import { useLanguage } from "@pages/settings/component/language/LanguageProvider";

const mainLinksMockdata = [
  { icon: IconAppsFilled, title: "لوحة التحكم", link: "/", label: "Home" },
  {
    icon: IconDeviceDesktop,
    title: "الكورسات",
    link: "/courses",
    label: "Courses",
  },
  {
    icon: IconClipboardList,
    title: "الدروس",
    link: "/lessons",
    label: "Lessons",
  },
  { icon: IconSchool, title: "الطلاب", link: "/students", label: "Students" },
  {
    icon: IconCurrencyDollar,
    title: "الاشتراكات",
    link: "/subscriptions",
    label: "Subscriptions",
  },
  {
    icon: IconUserFilled,
    title: "المعلمون",
    link: "/teachers",
    label: "Teachers",
  },
  {
    icon: IconBrandSamsungpass,
    title: "المساعدين",
    link: "/assistants",
    label: "Assistants",
  },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const [active, setActive] = useState(0);

  const mainLinks = mainLinksMockdata.map((link, index) => (
    <NavLink to={link.link}>
      <Tooltip
        label={link.label}
        position="right"
        withArrow
        transitionProps={{ duration: 0 }}
        key={link.label}
      >
        <UnstyledButton
          pr={8}
          onClick={() => setActive(index)}
          className={classes.mainLink}
          data-active={index === active || undefined}
          mb={15}
          mx={20}
        >
          <link.icon style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    </NavLink>
  ));

  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { language } = useLanguage();

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.wrapper}>
          <Box pb={10} bg={"rgb(90,117,215)"} className={classes.aside}>
            <Box>
              <Box mb={100} className={classes.logo}></Box>

              {mainLinks}
            </Box>
            <Box
              mt={50}
              display={"grid"}
              style={{ justifyItems: "center", gap: "0px" }}
            >
              <NavLink to={"/settings"}>
                <Tooltip
                  label={"Setting"}
                  position="right"
                  withArrow
                  transitionProps={{ duration: 0 }}
                >
                  <UnstyledButton
                    pr={8}
                    // onClick={() => setActive(index)}
                    className={classes.mainLink}
                    // data-active={index === active || undefined}
                    mb={5}
                    // h={"fit-content"}
                    mx={20}
                  >
                    <IconSettings
                      style={{ width: rem(30), height: rem(30) }}
                      stroke={1.5}
                    />
                  </UnstyledButton>
                </Tooltip>
              </NavLink>
              <NavLink to={"/"}>
                <Tooltip
                  label={"Logout"}
                  position="right"
                  withArrow
                  transitionProps={{ duration: 0 }}
                >
                  <UnstyledButton
                    pr={4}
                    // onClick={() => setActive(index)}
                    className={classes.mainLink}
                    // data-active={index === active || undefined}
                    mb={10}
                    mx={20}
                  >
                    <IconLogout
                      style={{
                        width: rem(30),
                        height: rem(30),
                        // marginLeft: "100px",
                      }}
                      stroke={1.5}
                    />
                  </UnstyledButton>
                </Tooltip>
              </NavLink>
              <img
                src={imageTeacher}
                width={"60px"}
                height={"60px"}
                alt=""
                style={{
                  borderRadius: "50px",
                  border: "1px solid rgb(39,180,252)",
                }}
              />
            </Box>
          </Box>
          <Box bg={"rgb(62,83,160)"} className={classes.main}>
            <Box mb={10} display={"flex"} style={{ justifyContent: "center" }}>
              <img src={logo} style={{ width: "150px", height: "150px" }} />
            </Box>
            <Box
              // mr={-110}
              display={"grid"}
              style={{ alignContent: "center", justifyContent: "center" }}
            >
              {mainLinksMockdata.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  onClick={() => setActive(index)}
                  className={
                    computedColorScheme == "light"
                      ? language != "English"
                        ? classes.mainTitleLink
                        : classes.mainTitleLinkEn
                      : language != "English"
                      ? classes.mainTitleLinkDark
                      : classes.mainTitleLinkDarkEn
                  }
                  style={{ cursor: "pointer" }}
                  data-active={index === active || undefined}
                >
                  {language != "English" ? item.title : item.label}
                </Link>
              ))}
            </Box>

            <Box ta={"end"}>
              {/* <Button m={10} color="none">
                <IconLogout
                  style={{ width: rem(22), height: rem(22), marginLeft: "5px" }}
                  stroke={1.5}
                />
                تسجيل الخروج
              </Button> */}
            </Box>

            {/* {links} */}
          </Box>

          {/* {active} */}
        </div>
      </nav>

      <Box
        dir={language != "English" ? "" : "ltr"}
        className={classes.navStyle}
      >
        <Box>
          <img src={imageNav} alt="" width={"70px"} height={"70px"} />
        </Box>
        <Box>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.burger}
          />
        </Box>
      </Box>
      <Box>
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
            <Box display={"grid"}>
              {mainLinksMockdata.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  onClick={() => setActive(index)}
                  className={
                    computedColorScheme == "light"
                      ? classes.mainTitleLinkNav
                      : classes.mainTitleLinkNavDark
                  }
                  style={{ cursor: "pointer" }}
                  data-active={index === active || undefined}
                >
                  {language != "English" ? item.title : item.label}
                </a>
              ))}
              <a
                href={"/settings"}
                // key={index}
                // onClick={() => setActive(index)}
                className={
                  computedColorScheme == "light"
                    ? classes.mainTitleLinkNav
                    : classes.mainTitleLinkNavDark
                }
                style={{ cursor: "pointer" }}
                // data-active={index === active || undefined}
              >
                Settings
              </a>
              <a
                href={"/"}
                // key={index}
                // onClick={() => setActive(index)}
                className={
                  computedColorScheme == "light"
                    ? classes.mainTitleLinkNav
                    : classes.mainTitleLinkNavDark
                }
                style={{ cursor: "pointer" }}
                // data-active={index === active || undefined}
              >
                logout
              </a>
            </Box>

            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    </>
  );
}
