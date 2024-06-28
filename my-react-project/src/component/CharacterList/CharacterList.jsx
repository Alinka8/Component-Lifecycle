import React, { useEffect, useState } from "react";
import axios from "axios";

const CharacterList = ({ onCharacterSelect }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const PUBLIC_KEY = "072d537317b67bc684ad7f2d1ccae091";
      const HASH = "34a59f091333ab0bdeed835909270d55";
      const URL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

      try {
        const response = await axios.get(URL);
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error("Error fetching the characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="character-list">
      {characters.map((character) => (
        <div
          key={character.id}
          className="character-card"
          onClick={() => onCharacterSelect(character.id)}
        >
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
