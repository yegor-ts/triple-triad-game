import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from '../Heading';
import Text from '../Text';

import { ReactComponent as Like } from './assets/heart.svg';

import style from './CharacterCard.module.scss';

const CharacterCard = ({
    id,
    name,
    src,
    humanName,
    description,
    isLiked,
    onLikeClick,
    onBioClick
}) => {
    const handleClick = () => {
        onLikeClick && onLikeClick(id);
    };

    const handleBioClick = () => {
        onBioClick && onBioClick(id);
    };

    return (
        <div className={style.root}>
            <img src={src} alt={name} className={style.cardImage} />
            <div className={style.cardDetails}>
                <Heading className={style.cardName} level={2}>
                    {name}
                </Heading>
                <Heading className={style.cardHumanName} level={4}>
                    {humanName}
                </Heading>
                <Text element="div" className={style.cardDescription}>
                    {description}
                </Text>
                <div className={style.cardMeta}>
                    <div
                        onClick={handleClick}
                        className={classNames(style.like, {
                        [style.active]: isLiked
                    })}
                    >
                        <Like/>
                    </div>
                    <div className={style.readBio}>
                        <a href="#" onClick={handleBioClick}>Read bio</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

CharacterCard.defaultProps = {
    isLiked: false
};

CharacterCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    src: PropTypes.string,
    humanName: PropTypes.string,
    description: PropTypes.string,
    onLikeClick: PropTypes.func,
    onBioClick: PropTypes.func
};

export default CharacterCard;
