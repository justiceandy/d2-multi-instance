import { Key, MouseEventHandler } from "react-router-dom/node_modules/@types/react";

export type BreadCrumb = string;
export type Breadcrumbs = BreadCrumb[];
export type HeaderIcon = {
    icon: string,
    title: string,
    onClick?: MouseEventHandler,
    index?: Key | number,
};
export type HeaderIcons = HeaderIcon[];

export interface HeaderItem {
    item: BreadCrumb,
    index: Key | number,
}
export interface HeaderArgs {
    breadcrumbs: Breadcrumbs,
    icons: HeaderIcons[],
}
