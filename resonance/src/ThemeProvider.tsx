import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React, { createContext, useContext, useReducer } from 'react';

type ThemeType = "LightMode" | "DarkMode";

interface IContext {
    theme: ThemeType;
    width: string;
    setTheme: (e: any) => any;
    setWidth: (e: any) => any;
};

// next는 외부에서 받는 함수. selected가 적용되면 그 selected를 밖으로 보내주는 역할을 한다.
const initialContext: IContext = {
    theme: "LightMode",
    width: "300px",
    setTheme: (e: any) => { },
    setWidth: (e: any) => { }
};

export const ThemeProviderContext = createContext(initialContext);

ThemeProviderContext.displayName = 'ThemeProviderContext';

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined) {
        throw new Error("useTheme must be used within a <ThemeProvider />")
    };
    return context;
};

type ActionType = {
    type: "SETTHEME",
    value: ThemeType
} | {
    type: "SETWIDTH",
    value: string
}

const reducer = (state: IContext, action: ActionType): IContext => {
    switch (action.type) {
        case "SETTHEME":
            return {
                ...state,
                theme: action.value
            };
        case "SETWIDTH":
            return {
                ...state,
                width: action.value
            };
        default:
            return state;
    };
};

export const ThemeProvider = ({ children, theme = "LightMode", width = "300px" }: { children: any, theme?: ThemeType, width?: string }) => {
    const [state, dispatch] = useReducer(reducer, initialContext);
    return (
        <ThemeProviderContext.Provider value={{ ...state, theme, width, setTheme: (value: ThemeType) => dispatch({ type: "SETTHEME", value }), setWidth: (value: string) => dispatch({ type: "SETWIDTH", value}) }}>
            {children}
        </ThemeProviderContext.Provider>
    );
};

