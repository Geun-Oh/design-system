import React, { createContext, useContext, useReducer } from 'react';

interface IContext {
    value: number;
    width?: string;
    next: (e: any) => any;
    setValue: () => any;
    plus: () => any;
    minus: () => any;
};

const initialContext: IContext = {
    value: 0,
    width: "80px",
    next: (e: any) => { },
    setValue: () => { },
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
} | {
    type: "SETVALUE",
    value: number,
};

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
        case "SETVALUE":
            return {
                ...state,
                value: action.value
            };
        default:
            return state;
    };
};

export const StepperMain = ({ children, defaultValue, next, width }: { children: any, defaultValue: number, next: (e: any) => any, width?: string }) => {
    const [state, dispatch] = useReducer(reducer, initialContext);
    // dispatch({ type: "SETVALUE", value: defaultValue }); 여기서 이걸 쓰면 무한루프 에러가 걸린다...

    return (
        <StepperContext.Provider value={{ ...state, next, width, plus: () => dispatch({ type: "PLUS" }), minus: () => dispatch({ type: "MINUS" }), setValue: () => dispatch({ type: "SETVALUE", value: defaultValue }) }}>
            {children}
        </StepperContext.Provider>
    );
};

