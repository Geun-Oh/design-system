import React, { createContext, useContext, useReducer } from 'react';

interface IContext {
    options: string[],
    search: string,
    selected: string,
    toggled: boolean,
    next: (e: any) => any
}

const initialContext: IContext = {
    options: [],
    search: "",
    selected: "",
    toggled: false,
    next: (e: any) => {}
}

export const SelectContext = createContext(initialContext)

SelectContext.displayName = 'SelectContext'

export const useSelect = () => {
    const context = useContext(SelectContext)

    if (context === undefined) {
        throw new Error("useSelect must be used within a <Select />")
    }
    return context
}

type ActionType = {
    type: "ADD",
    value: string
} | {
    type: "SETNEXT",
    value: (e: any) => any
}

const reducer = (state: IContext, action: ActionType): IContext => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                options: state.options.concat(action.value)
            };
        case "SETNEXT":
            return {
                ...state,
                next: action.value
            };
        default:
            return state;
    }
}

export const SelectProvider = ({ children, value }) => {
    const [state, dispatch] = useReducer(reducer, initialContext);

    return (
        // 23.01.21 ㅜㅜ 아직 구조가 정확히 파악이 안 된다. 일단 밖에서 가져올 value로는 options와 next 함수가 있는데 둘 다 설정을 할 때 dispatch를 사용해야하는 것 같다. 그러면 value에서 options: state는 왜 해주는 거지?
        <SelectContext.Provider value={{ ...value, options: state,  }}> 
            {children}
        </SelectContext.Provider>
    )
}