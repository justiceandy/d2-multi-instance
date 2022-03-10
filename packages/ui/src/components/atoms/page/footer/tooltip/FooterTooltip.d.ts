import { Key, MouseEventHandler } from "react-router-dom/node_modules/@types/react";

export interface TipActionIconArgs {
    icon: string,
    title: string,
    onClick?: MouseEventHandler,
    index?: Key,
}

export interface PageFooterToolTipArgs {
    icons: TipActionIcon[],
    text: string,
}
