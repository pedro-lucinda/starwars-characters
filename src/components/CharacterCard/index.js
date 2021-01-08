import React, { useState } from "react";
//sound
import useSound from "use-sound";
import swing from "../../assets/sw-sound.wav";
//style
import { CharacterCardContainer } from "./style";

export const CharacterCard = (props) => {
  const [play] = useSound(swing);
  const [expand, setExpand] = useState(false);
  return (
    <CharacterCardContainer onMouseEnter={play}>
      <h1> {props.name} </h1>
      {!expand ? (
        <p onClick={() => setExpand(true)}> Expand </p>
      ) : (
        <>
          <p onClick={() => setExpand(false)}> Hide </p>
          <div className="animateUp">
            <h3> Data </h3>
            <hr />
            <p>
              <strong> Gender: </strong>
              {props.gender}
            </p>
            <p>
              <strong> Height: </strong>
              {props.height}
            </p>
            <p>
              <strong> Mass: </strong> {props.mass}
            </p>
            <p>
              <strong> Hair Color:</strong> {props.hairColor}
            </p>
          </div>
        </>
      )}
    </CharacterCardContainer>
  );
};

export default CharacterCard;
