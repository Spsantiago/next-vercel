import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UIState {
    sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
};
interface Props{
    children: React.ReactNode;
}
export const UiProvider: FC<Props> = ({ children }) => {

const [state, dispatch] = useReducer( uiReducer , UI_INITIAL_STATE )

    return (
        <UiContext.Provider value={{ sideMenuOpen: false }}>
            {' '}
            {children}{' '}
        </UiContext.Provider>
    );
};