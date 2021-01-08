import React from "react";
import { CharactersContextProvider } from "./context/CharactersContext";
import Routes from "./Routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <CharactersContextProvider>
        <Routes />
      </CharactersContextProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
