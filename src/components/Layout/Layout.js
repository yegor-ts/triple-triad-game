import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

import style from './Layout.module.scss';

function Layout() {
  return (
    <div className={style.root}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
