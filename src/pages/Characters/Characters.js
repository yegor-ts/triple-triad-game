import { useState } from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import { CHARACTERS } from './characters.data';
import CharacterCard from '../../components/CharacterCard';

import style from './Characters.module.scss';

const Characters = () => {
  const [characters, setCharacters] = useState();

  const handleLikeClick = (id) => {
    setCharacters((prevState) =>
      prevState.map((character) => {
        if (character.id === id) {
          character.isLike = !character.isLike;
        }
        return character;
      }),
    );
  };

  return (
    <div className={style.root}>
      <Container>
        <div className={style.cardTitle}>
          <Heading level={1} backLine>
            Characters
          </Heading>
        </div>
        <div className={style.cardWrap}>
          {CHARACTERS.map((character) => (
            <CharacterCard
              id={character.id}
              name={character.name}
              description={character.description}
              src={character.thumbnail.path}
              humanName={character.humanName}
              isLiked={character.isLike}
              onLikeClick={handleLikeClick}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Characters;
