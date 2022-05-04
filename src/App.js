import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main/Main';
import Biography from './pages/Biography/Biography';
import Layout from './components/Layout';
import AboutGame from './pages/AboutGame/AboutGame';
import Contacts from './pages/Contacts/Contacts';
import CharactersWrap from './components/CharactersWrap';
import Characters from './pages/Characters/Characters';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    hash ? document
        .querySelector(hash)
        .scrollIntoView({ block: 'center', behavior: 'smooth' }) :
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="characters" element={<CharactersWrap />}>
          <Route index element={<Characters />} />
          <Route path=":id" element={<Biography />} />
        </Route>
        <Route path="about" element={<AboutGame />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
