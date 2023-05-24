import { createContext } from "react"



interface ContextProps{
    sideMenuOpen: boolean,

    //metodos
    openSideMenu: () => void
    closeSideMenu: () => void
}

export const  UiContext= createContext({}  as ContextProps)