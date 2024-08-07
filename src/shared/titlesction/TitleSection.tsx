import { Box, Text, useComputedColorScheme } from "@mantine/core";

import styles from "./TitleSection.module.css";

const {
  titleLight,
  parent,
  titleDark,
  titleStyle,
  styleBackLight,
  styleBackDark,
} = styles;
export default function TitleSection({title}:{title:string}) {
      const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
      });
  return (
    <div className={parent}>
      <Box
        className={`${
          computedColorScheme == "light" ? styleBackLight : styleBackDark
        }`}>
        <Text
          className={`${titleStyle} ${computedColorScheme == "light" ? titleLight : titleDark}`}>
          {title}
        </Text>
      </Box>
    </div>
  );
}


