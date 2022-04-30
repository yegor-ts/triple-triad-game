import Heading from '../Heading';
import Container from '../Container';
import Button from '../Button';

import style from './Slider.module.scss';

const Slider = () => {
    return (
        <section className={style.section}>
            <div className={style.slider}>
                <Container className={style.sliderContent}>
                    <Heading level={1} backLine>Triple Triad Game</Heading>
                    <Heading level={2} className={style.subheader}>Wow Wow Wow</Heading>
                    <Button>Wow</Button>
                </Container>
            </div>
        </section>
    );
}

export default Slider;
