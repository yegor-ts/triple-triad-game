import Heading from '../Heading';
import Container from '../Container';

import style from './Slider.module.css';

const Slider = () => {
    return (
        <section className={style.section}>
            <div className={style.slider}>
                <Container className={style.sliderContent}>
                    <Heading level={1}>This is heading with children</Heading>
                    <Heading level={2} className={style.subheader} black>Wow.Wow.Wow</Heading>
                    <div className={style.call}>
                        <button className={style.button}>Wow</button>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Slider;
