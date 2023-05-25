import { UIState } from '.';

type UIActionType =
    | { type: 'UI - Open Sidebar' }
    | { type: 'UI - Close Sidebar' }
    | { type: 'UI - Set isAddingEntry'; paylod: boolean }
    | { type: 'UI - Start Drgging' }
    | { type: 'UI - End Drgging' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
    switch (action.type) {
        case 'UI - Open Sidebar':
            return {
                ...state,
                sideMenuOpen: true,
            };
        case 'UI - Close Sidebar':
            return {
                ...state,
                sideMenuOpen: false,
            };
        case 'UI - Set isAddingEntry':
            return {
                ...state,
                isAddingEntry: action.paylod,
            };

        case 'UI - Start Drgging':
            return {
                ...state,
                isDraggin: true,
            };
        case 'UI - End Drgging':
            return {
                ...state,
                isDraggin: false,
            };

        default:
            return state;
    }
};
