import React, { createContext, ReducerAction, useContext, useReducer, useState } from 'react';

export const SelectContext = createContext({
    listData: [] as any,
    selectedData: undefined as any,
    searchedList: [] as Array<any>,
    setListData: (e: any) => { },
    setSelectedData: (e: any) => { },
    setSearchedList: (e: any) => { },
    defaultValue: undefined as any,
    setIsOpen: (e: boolean) => { }
})

SelectContext.displayName = 'SelectContext'

export const useSelect = () => {
    const context = useContext(SelectContext)

    if (context === undefined) {
        throw new Error("useSelect must be used within a <Select />")
    }
    return context
}

interface ActionType {
    type: string;
    value: string;
}

const reducer = (state: string[], action: ActionType): string[] => {
    switch (action.type) {
        case "ADD":
            return [ ...state, action.value ];
        default:
            return state;
    }
}

export const SelectProvider = ({ children, values }) => {
    // 23.01.19 reducer 타입 확실히 확인하고 수정하기!!
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <SelectContext.Provider value={{ ...values, listData: state, setListData: (value: string) => dispatch({ type: "ADD", value }) }}>
            {children}
        </SelectContext.Provider>
    )
}