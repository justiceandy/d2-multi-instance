
export interface Tab {
    notify?: Function, 
    route?: string,
    url?: string, 
    label: string, 
    exact?: boolean, 
}

export type UrlTab = {
    url: string, 
    label: string, 
    exact?: boolean, 
}

export type StateTab = {
    label: string, 
    notify: Function, 
    route: string
}

export interface UrlTabProps {
    tabs: UrlTab[],
    type?: string,
    active?: string,
}

export interface StateTabProps {
    tabs: StateTab[],
    type?: string,
    active: string,
}

export interface TabProps {
    tabs: Tab[] | UrlTab[] | StateTab[],
    type?: string,
    active: string,
}
