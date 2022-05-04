import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import Container from '../Container';
import logo from '../../assets/logo.png';

import style from './Header.module.scss';

const MENU = [
  {
    title: 'Main',
    href: '/',
  },
  {
    title: 'Characters',
    href: '/characters',
  },
  {
    title: 'About Game',
    href: '/about',
  },
  {
    title: 'Contacts',
    href: '/contacts',
  },
];

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
            {MENU.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => {
                    return isActive ? style.active : null;
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
