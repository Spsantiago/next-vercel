import { createContext } from "react"



interface ContextProps{
    sideMenuOpen: boolean,
    isAddingEntry:boolean,
    isDraggin: boolean,
    //metodos
    openSideMenu: () => void
    closeSideMenu: () => void
    setIsAddingEntry: (isAdding: boolean) => void
    startDragging: () => void; 
    endDragging: () => void;
}

export const  UiContext= createContext({}  as ContextProps)