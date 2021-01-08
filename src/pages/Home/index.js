import React, { useState, useContext } from "react";
import logo from "../../assets/logo.svg";
import { HomeWrapper,HomeContainer, Logo } from "./style"
import spaceShip from "../../assets/spaceship.png";
import Pagination from "../../components/Pagination";
import CharacterCard from "../../components/CharacterCard";
import Loading from "../../components/Loading";
//context
import {CharactersContext} from '../../context/CharactersContext'


const Home = () => {
  const {characters} = useContext(CharactersContext)

  //For the pagination
  const [pageCurrent, setPageCurrent] = useState(1);
  const [charactersPerPage] = useState(6);
  const indexOfLastCharacter = pageCurrent * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters =
    characters && characters.slice(indexOfFirstCharacter, indexOfLastCharacter);
  //Chage page
  function handlePaginate(pageNumber) {
    return setPageCurrent(pageNumber);
  }

  return (
    <HomeWrapper className="animateBg">
    <HomeContainer bg={spaceShip}>
      <Logo src={logo} alt="Star Wars" />
      <main className="animateUp">
        {currentCharacters.length > 0 ? (
          currentCharacters.map((character) => (
            <CharacterCard
              key={character.name}
              name={character.name}
              gender={character.gender}
              height={character.height}
              mass={character.mass}
              hairColor={character.hair_color}
            />
          ))
        ) : (
          <Loading />
        )}
      </main>
      <Pagination
        charactersPerPage={charactersPerPage}
        totalCharacters={characters && characters.length}
        paginate={handlePaginate}
      />
    </HomeContainer>

</HomeWrapper>
);
};

export default Home;
