import React, { createContext, useState, useEffect } from "react";
import { useGetData } from "../hooks/useGetData";

export const CharactersContext = createContext();

export const CharactersContextProvider = (props) => {
  const [characters, setCharacters] = useState([]);
  const [data] = useGetData([], "/people/");

  useEffect(() => {
    return setCharacters(data);
  }, [data]);

  return (
    <CharactersContext.Provider value={{ characters }}>
      {props.children}
    </CharactersContext.Provider>
  );
};
