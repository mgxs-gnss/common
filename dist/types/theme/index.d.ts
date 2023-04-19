import { ThemeOptions } from "@mui/material";
import { PropsWithChildren } from "react";
export declare const themeOptions: ThemeOptions;
interface Theme extends PropsWithChildren {
    customTheme?: ThemeOptions;
}
export declare const Theme: ({ customTheme, children }: Theme) => JSX.Element;
export {};
