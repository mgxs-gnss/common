import { ThemeOptions } from "@mui/material";
import { PropsWithChildren } from "react";
export declare const themeOptions: ThemeOptions;
interface ITheme extends PropsWithChildren {
    customTheme?: ThemeOptions;
}
export declare const Theme: ({ customTheme, children }: ITheme) => JSX.Element;
export {};
