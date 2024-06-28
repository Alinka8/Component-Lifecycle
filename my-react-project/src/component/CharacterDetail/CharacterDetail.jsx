import React, { useEffect, useState } from "react";
import axios from "axios";

const CharacterDetail = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (characterId) {
      const fetchCharacterDetails = async () => {
        const PUBLIC_KEY = "072d537317b67bc684ad7f2d1ccae091";
        const HASH = "34a59f091333ab0bdeed835909270d55";
        const URL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

        try {
          const response = await axios.get(URL);
          setCharacter(response.data.data.results[0]);
        } catch (error) {
          console.error("Error fetching the character details:", error);
        }
      };

      fetchCharacterDetails();
    }
  }, [characterId]);

  if (!character) {
    return <div>Select a character to see details</div>;
  }

  return (
    <div className="character-detail">
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <h3>Comics</h3>
      <ul>
        {character.comics.items.map((comic) => (
          <li key={comic.resourceURI}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
