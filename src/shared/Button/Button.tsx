import { Box } from "@mantine/core";
import Styles from "./Button.module.css";
import { Link } from "react-router-dom";
import { IconArrowNarrowLeft } from "@tabler/icons-react";

export default function Button({
  text,
  route,
}: {
  text: string;
  route: string;
}) {
  return (
    <div>
      {" "}
      <Box mb={100} mt={40} display={"flex"} style={{ justifyContent: "center" }}>
        <Link to={`${route}`} className={Styles.btnAllCourses}>
          {text}
          <IconArrowNarrowLeft />
        </Link>
      </Box>
    </div>
  );
}
