import Container from "../Container";

import style from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={style.root}>
            <Container>
                <div className={style.footerWrap}>
                    Coded with
                    <span className={style.heart}/>
                    by You
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
