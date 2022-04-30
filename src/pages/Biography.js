import Button from '../components/Button';
import Heading from '../components/Heading';
import Text from '../components/Text';
import PropTypes from 'prop-types';
import { BIO } from './Biography.data';

import style from './Biography.module.scss';

const Biography = ({ id, onBackClick }) => {
    const handleBackClick = () => {
        onBackClick();
    };

    return (
        <div className={style.root}>
            <div className={style.buttonWrapper}>
                <div onClick={handleBackClick} className={style.button}>
                    <Button buttonText="Go Back" black/>
                </div>
            </div>
            <div>
                {
                    BIO[id].map((item) => {
                        if (item.type.startsWith('h')) {
                            const lvl = Number(item.type.split('h')[1]);

                            return <Heading level={lvl}>{item.text}</Heading>
                        } else if (item.src) {
                            return (
                                <div className={style.img}>
                                    <img className={style.img} src={item.src} alt="image" />
                                </div>
                            )
                        }
                        else {
                            return <Text element="p">{item.text}</Text>
                        }
                    })
                }
            </div>
        </div>
    );
};

Biography.propTypes = {
    id: PropTypes.number,
    onBackClick: PropTypes.func
};

export default Biography;
