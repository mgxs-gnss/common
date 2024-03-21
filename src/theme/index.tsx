import {
  alpha,
  createTheme,
  CssBaseline,
  lighten,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import { PropsWithChildren } from "react";
//@ts-ignore
import IBMPlexMono from "./fonts/ibm/IBMPlexMono-Regular.ttf";
//@ts-ignore
import TomorrowRegular from "./fonts/tomorrow/Tomorrow-Regular.ttf";
//@ts-ignore
import TomorrowBold from "./fonts/tomorrow/Tomorrow-Bold.ttf";
//@ts-ignore
import TomorrowLight from "./fonts/tomorrow/Tomorrow-Light.ttf";
//@ts-ignore
import TomorrowMedium from "./fonts/tomorrow/Tomorrow-Medium.ttf";
//@ts-ignore
import TomorrowThin from "./fonts/tomorrow/Tomorrow-Thin.ttf";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#EEFF41",
      light: lighten("#EEFF41", 0.1),
      dark: "rgb(39, 39, 39)",
    },
    secondary: {
      main: "#E5E7EB",
      dark: "#666",
    },
    background: {
      default: "#1C1C1C",
      paper: "#000000",
    },
  },
  typography: {
    fontFamily: "Tomorrow, Arial, Helvetica, sans-serif",
    htmlFontSize: 16,
    allVariants: {
      lineHeight: 1.75,
    },
  },
};

interface ITheme extends PropsWithChildren {
  customTheme?: ThemeOptions;
}

export const Theme = ({ customTheme, children }: ITheme) => {
  const darkTheme = createTheme({
    ...themeOptions,
    ...customTheme,
    typography: {
      ...themeOptions.typography,
    },
    components: {
      MuiBreadcrumbs: {
        styleOverrides: {
          root: {
            alignItems: "baseline",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          sx: ({ palette, spacing }) => ({
            borderRadius: 0,
            clipPath: `polygon(85% 0px, 100% 50%, 100% 100%, 0px 100%, 0px 0px)`,
            px: spacing(3),
            fontWeight: "bold",
            lineHeight: 4,
            "&:hover": {
              background: palette.secondary.main,
            },
          }),
        },
        styleOverrides: {
          text: {
            textTransform: "capitalize",
            font: "normal normal medium 14px/17px Tomorrow",
            letterSpacing: "0.7px",
            fontWeight: 500,
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: IBMPlexMono;
            src: url(${IBMPlexMono});
          }
          @font-face {
            font-family: 'Tomorrow';
            src: url(${TomorrowThin});
            font-weight: 100;
            font-style: normal;
          }
          @font-face {
            font-family: 'Tomorrow';
            src: url(${TomorrowRegular});
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Tomorrow';
            src: url(${TomorrowMedium});
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Tomorrow';
            src: url(${TomorrowBold});
            font-weight: 700;
            font-style: normal;
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
