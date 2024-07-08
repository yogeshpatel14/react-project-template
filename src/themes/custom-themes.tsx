import { FC, ReactNode } from "react";
import { createTheme, SxProps, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

type propsTheme = {
  children: ReactNode;
};

export interface interfaceStyleProps {
  [key: string]: SxProps;
}

const MainThemeProvider: FC<propsTheme> = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default MainThemeProvider;
