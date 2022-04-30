import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import PropTypes from 'prop-types';
import { BIO } from './Biography.data';

import style from './Biography.module.scss';
import Container from "../../components/Container";

const Biography = ({ id, onBackClick }) => {
    const handleBackClick = () => {
        onBackClick && onBackClick();
    };

    return (
        <div className={style.root}>
            <Container>
                <div className={style.btnWrap}>
                    <Button color="black" onClick={handleBackClick}>Go Back</Button>
                </div>
                <div>
                    {
                        BIO[id].map((item) => {
                            switch (item.type) {
                                case 'h1':
                                    return <Heading level={1}>{item.text}</Heading>
                                case 'h2':
                                    return <Heading level={1}>{item.text}</Heading>
                                case 'paragraph':
                                    return <Text element="p">{item.text}</Text>
                                case 'img':
                                    return <div className={style.imgWrap}><img src={item.src} alt="image" /></div>
                                default:
                                    return <Text element="p">{item.text}</Text>
                            }
                        })
                    }
                </div>
            </Container>
        </div>
    );
};

Biography.propTypes = {
    id: PropTypes.number,
    onBackClick: PropTypes.func
};

export default Biography;
