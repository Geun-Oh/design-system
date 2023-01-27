import React, { createContext, useContext, useReducer } from 'react';

interface IContext {
    width: string;
    theme: string;
    setWidth: (e: any) => any;
    setTheme: (e: any) => any;
};

const initialContext: IContext = {
    width: "300px",
    theme: "LightMode",
    setWidth: (e: any) => { },
    setTheme: (e: any) => { }
};

export const InputContext = createContext(initialContext);

InputContext.displayName = 'InputContext';

export const useInput = () => {
    const context = useContext(InputContext);

    if (context === undefined) {
        throw new Error("useSelect must be used within a <Select />")
    };
    return context;
};

type ActionType = {
    type: "SETWIDTH",
    value: string
} | {
    type: "SETTHEME",
    value: string
}

const reducer = (state: IContext, action: ActionType): IContext => {
    switch (action.type) {
        case "SETWIDTH":
            return {
                ...state,
                width: action.value
            };
        case "SETTHEME":
            return {
                ...state,
                theme: action.value
            };
        default:
            return state;
    };
};

export const InputMain = ({ children, width, theme }) => {
    const [state, dispatch] = useReducer(reducer, initialContext);
    return (
        <InputContext.Provider value={{ ...state, width, theme, setWidth: (value: string) => dispatch({ type: "SETWIDTH", value }), setTheme: (value: string) => dispatch({ type: "SETTHEME", value }) }}>
            {children}
        </InputContext.Provider>
    );
};

