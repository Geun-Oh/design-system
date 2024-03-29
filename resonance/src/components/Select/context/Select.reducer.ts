import { createContext, useContext } from 'react';

interface IContext {
    options?: string[],
    search?: string,
    selected?: string,
    toggled?: boolean,
    next: (e: any) => any,
    setOptions: (e: any) => any,
    setSearch: (e: any) => any,
    setSelected: (e: any) => any,
    setToggled: () => any
};

// next는 외부에서 받는 함수. selected가 적용되면 그 selected를 밖으로 보내주는 역할을 한다.
export const initialContext: IContext = {
    options: [],
    search: "",
    selected: "",
    toggled: true,
    next: (e: any) => { },
    setOptions: (e: any) => { },
    setSearch: (e: any) => { },
    setSelected: (e: any) => { },
    setToggled: () => { }
};

export const SelectContext = createContext(initialContext);

SelectContext.displayName = 'SelectContext';

export const useSelect = () => {
    const context = useContext(SelectContext);

    if (context === undefined) {
        throw new Error("useSelect must be used within a <Select />")
    };
    return context;
};

type ActionType = {
    type: "ADD",
    value: string
} | {
    type: "SETSEARCH",
    value: string
} | {
    type: "SETSELECTED",
    value: string
} | {
    type: "SETBOOLEAN"
};

export const reducer = (state: IContext, action: ActionType): IContext => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                options: state.options!.concat(action.value)
            };
        case "SETSEARCH":
            return {
                ...state,
                search: action.value
            };
        case "SETSELECTED":
            return {
                ...state,
                selected: action.value
            };
        case "SETBOOLEAN":
            return {
                ...state,
                toggled: !state.toggled
            }
        default:
            return state;
    };
};