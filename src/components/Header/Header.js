import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import Container from '../Container';
import logo from '../../assets/logo.png';

import style from './Header.module.scss';

const Header = () => {
  const navigate = useNavigate();
  const [className, setClassName] = useState();

  const addHeaderClass = () => {
    window.scrollY > 60 ? setClassName(style.small) : setClassName(null);
  };

  useEffect(() => {
    window.addEventListener('scroll', addHeaderClass);

    return () => {
      window.removeEventListener('scroll', addHeaderClass);
    };
  }, []);

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className={style.root}>
      <div className={classNames(style.header, className)}>
        <Container className={style.flexWrap}>
          <div onClick={handleLogoClick}>
            <img src={logo} alt="logo" className={style.logo} />
          </div>
          <ul className={style.nav}>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/about">About Game</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
