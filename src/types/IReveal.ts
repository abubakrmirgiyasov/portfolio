import {ReactNode} from "react";

export interface IReveal {
    children: ReactNode;
    width?: "fit-content" | "100%";
}