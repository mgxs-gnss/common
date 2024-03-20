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
import Tomorrow from "./fonts/tomorrow/Tomorrow-Regular.ttf";

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
      },
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: IBMPlexMono;
            src: url(${IBMPlexMono});
          }
          @font-face {
            font-family: Tomorrow;
            src: url(${Tomorrow});
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
