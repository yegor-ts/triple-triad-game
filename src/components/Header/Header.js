import { useEffect, useState } from 'react';
import Container from '../Container';
import logo from '../../assets/logo.png';
import classNames from 'classnames';

import style from './Header.module.scss';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
    const [className, setClassName] = useState();

    const addHeaderClass = () => {
        window.scrollY > 60 ? setClassName(style.small) : setClassName(null);
    };

    useEffect(() => {
        window.addEventListener('scroll', addHeaderClass);

        return () => {
            window.removeEventListener('scroll', addHeaderClass);
        }
    }, []);

    return (
        <header className={style.root}>
            <div className={classNames(style.header, className)}>
                <Container className={style.flexWrap}>
                    <div>
                        <img src={logo} alt="logo" className={style.logo}/>
                    </div>
                    <ul className={style.nav}>
                        {MENU.map((item) => <li><a href="#">{item}</a></li>)}
                    </ul>
                </Container>
            </div>
        </header>
    );
}
export default Header;
