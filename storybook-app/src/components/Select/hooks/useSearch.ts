import React, { useState, useEffect } from "react";
import { useSelect } from "./SelectContext";

export const useSearch = () => {
  const [input, setInput] = useState("");

  const { listData, setSearchedList } = useSelect();

  useEffect(() => {
    if (input.length === 0) {
      setSearchedList(undefined);
      return;
    }

    setSearchedList(input);
  }, [input]);

  const handleSearchList = (input: string) => {
    const result = listData.filter((value: string) =>
      value.toLowerCase().includes(value.toLowerCase())
    );

    result && setSearchedList(result);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return {
    input,
    onChange
  }
};
