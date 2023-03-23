import { BoxProps } from "@mui/material";
interface ILoader extends BoxProps {
    scale?: number;
}
declare const Loader: ({ scale, ...props }: ILoader) => JSX.Element;
export { Loader };
