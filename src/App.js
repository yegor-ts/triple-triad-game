import { useState } from 'react';
import Header from './components/Header/index';
import Slider from './components/Slider/index';
import Footer from './components/Footer/index';
import Container from './components/Container';
import Heading from './components/Heading';
import CharacterCard from './components/CharacterCard';
import Biography from './pages/Biography/Biography';
import { CHARACTERS } from './components/CharacterCard/characters.data';

import style from './App.module.scss';

function App() {
    const [characters, setCharacters] = useState(CHARACTERS);
    const [characterId, setCharacterId] = useState();

    const handleLikeClick = (id) => {
        setCharacters(prevState => prevState.map((character) => {
            if (character.id === id) {
                character.isLike = !character.isLike;
            }
            return character;
        }));
    };

    const handleBioClick = (id) => {
        setCharacterId(id);
    };

    if (characterId) {
        return (
            <>
                <Header />
                <Container>
                    <Biography onBackClick={handleBioClick} id={characterId}/>
                </Container>
                <Footer />
            </>
        );
    } else {
        return (
                    <>
                        <Header />
                        <Slider />
                        <section className={style.cardSection}>
                            <Container>
                                <div className={style.cardTitle}>
                                    <Heading level={1} backLine>
                                        Marvel Cards
                                    </Heading>
                                    <Heading level={2}>
                                        Collect your best five
                                    </Heading>
                                </div>
                                <div className={style.cardWrap}>
                                    {characters.map((character) => {
                                        return <div>
                                            <CharacterCard
                                                id={character.id}
                                                name={character.name}
                                                description={character.description}
                                                src={character.thumbnail.path}
                                                humanName={character.humanName}
                                                isLiked={character.isLike}
                                                onLikeClick={handleLikeClick}
                                                onBioClick={handleBioClick}
                                            />
                                        </div>
                                    })}
                                </div>
                            </Container>
                        </section>
                        <Footer/>
                    </>
                );
    }
}

export default App;
