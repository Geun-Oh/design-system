import { useReducer } from "react";
import { reducer, initialContext, SelectContext } from "@src/components/Select/context/Select.reducer";

export const SelectContextProvider = ({ children, next }: { children: React.ReactNode, next: (e: any) => any }) => {
    const [state, dispatch] = useReducer(reducer, initialContext);
    return (
        <SelectContext.Provider value={{ ...state, next, setOptions: (value: string) => dispatch(({ type: "ADD", value })), setSearch: (value: string) => dispatch({ type: "SETSEARCH", value }), setSelected: (value: string) => dispatch({ type: "SETSELECTED", value }), setToggled: () => dispatch({ type: "SETBOOLEAN" }) }}>
            {children}
        </SelectContext.Provider>
    );
};