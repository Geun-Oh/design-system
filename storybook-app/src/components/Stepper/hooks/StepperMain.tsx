import React, { createContext, useContext, useReducer } from 'react';

interface IContext {
    value: number;
    width?: string;
    next: (e: any) => any;
    plus: () => any;
    minus: () => any;
};

const initialContext: IContext = {
    value: 0,
    width: "80px",
    next: (e: any) => { },
    plus: () => { },
    minus: () => { },
};

export const StepperContext = createContext(initialContext);

StepperContext.displayName = 'StepperContext';

export const useStepper = () => {
    const context = useContext(StepperContext);

    if (context === undefined) {
        throw new Error("useSelect must be used within a <Select />")
    };
    return context;
};

type ActionType = {
    type: "PLUS",
} | {
    type: "MINUS",
}

const reducer = (state: IContext, action: ActionType): IContext => {
    switch (action.type) {
        case "PLUS":
            return {
                ...state,
                value: state.value + 1
            };
        case "MINUS":
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state;
    };
};

export const StepperMain = ({ children, value, next, width }: { children: any, value: number, next: (e: any) => any, width?: string }) => {
    const [state, dispatch] = useReducer(reducer, initialContext);
    return (
        <StepperContext.Provider value={{ ...state, value, next, width, plus: () => dispatch({ type: "PLUS" }), minus: () => dispatch({ type: "MINUS" }) }}>
            {children}
        </StepperContext.Provider>
    );
};

