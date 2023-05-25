import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UIState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean
    isDraggin: boolean 
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
    isAddingEntry: false,
    isDraggin: false,
};
interface Props {
    children: React.ReactNode;
}
export const UiProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu=()=>{
        dispatch({type: 'UI - Open Sidebar'})
    }
    const closeSideMenu=()=>{
        dispatch({type: 'UI - Close Sidebar'})
    }
    const setIsAddingEntry= (isAdding: boolean)=>{
        dispatch({type: 'UI - Set isAddingEntry', paylod: isAdding})
    }
    const startDragging=()=>{
        dispatch({type:'UI - Start Drgging'})
    }
    const endDragging=()=>{
        dispatch({type:'UI - End Drgging'})
    }


    return (
        <UiContext.Provider value={{ 
        ...state ,
        
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,

        startDragging,
        endDragging,

        }}>
            {' '}
            {children}{' '}
        </UiContext.Provider>
    );
};
