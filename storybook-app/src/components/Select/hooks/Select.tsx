import React, { createContext, useContext, useEffect, useReducer } from 'react';

interface IContext {
    options?: string[],
    search?: string,
    selected?: string,
    toggled?: boolean,
    next: (e: any) => any,
    setOptions: (e: any) => any,
    setSearch: (e: any) => any,
    setSelected: (e: any) => any,
    setToggled: (e: any) => any
};

// next는 외부에서 받는 함수. selected가 적용되면 그 selected를 밖으로 보내주는 역할을 한다.
const initialContext: IContext = {
    options: [],
    search: "",
    selected: "",
    toggled: false,
    next: (e: any) => { },
    setOptions: (e: any) => { },
    setSearch: (e: any) => { },
    setSelected: (e: any) => { },
    setToggled: (e: any) => { }
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

const reducer = (state: IContext, action: ActionType): IContext => {
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

export const SelectMain = ({ children, next }) => {
    const [state, dispatch] = useReducer(reducer, initialContext);
    return (
        // 23.01.21 ㅜㅜ 아직 구조가 정확히 파악이 안 된다. 일단 밖에서 가져올 value로는 options와 next 함수가 있는데 둘 다 설정을 할 때 dispatch를 사용해야하는 것 같다. 그러면 value에서 options: state는 왜 해주는 거지?
        <SelectContext.Provider value={{ next, setOptions: (value: string) => dispatch(({ type: "ADD", value })), setSearch: (value: string) => dispatch({ type: "SETSEARCH", value }), setSelected: (value: string) => dispatch({ type: "SETSELECTED", value }), setToggled: () => dispatch({ type: "SETBOOLEAN" }) }}>
            {children}
        </SelectContext.Provider>
    );
};

