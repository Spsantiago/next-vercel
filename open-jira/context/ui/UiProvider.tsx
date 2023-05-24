import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UIState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
    isAddingEntry: false
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

    return (
        <UiContext.Provider value={{ ...state ,
        openSideMenu,
        closeSideMenu
        }}>
            {' '}
            {children}{' '}
        </UiContext.Provider>
    );
};
