import {
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import { PropsWithChildren } from "react";
//@ts-ignore
import IBMPlexMono from "./fonts/ibm/IBMPlexMono-Regular.ttf";
//@ts-ignore
import Taviraj from "./fonts/taviraj/Taviraj-Regular.ttf";
//@ts-ignore
import VCR_OSD_Mono_400 from "./fonts/VCR_OSD_Mono_400.ttf";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(197,255,2)",
    },
    secondary: {
      main: "#696969",
    },
    background: {
      default: "#151414",
      paper: "#121212",
    },
  },
  typography: {
    fontFamily: "IBMPlexMono",
  },
};

interface Theme extends PropsWithChildren {
  customTheme?: ThemeOptions;
}

export const Theme = ({ customTheme, children }: Theme) => {
  const darkTheme = createTheme({
    ...themeOptions,
    ...customTheme,
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: Taviraj;
            src: url(${Taviraj});
          }
          @font-face {
            font-family: VCROSDMono;
            src: url(${VCR_OSD_Mono_400});
          }
  
          @font-face {
            font-family: IBMPlexMono;
            src: url(${IBMPlexMono});
          }
        `,
      },
      ...customTheme?.components,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
