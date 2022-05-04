import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Biography from './pages/Biography/Biography';
import Layout from './components/Layout';
import AboutGame from './pages/AboutGame/AboutGame';
import Contacts from './pages/Contacts/Contacts';
import CharactersWrap from './components/CharactersWrap';
import Characters from './pages/Characters/Characters';

const App = () => {
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
      </Route>
    </Routes>
  );
};

export default App;
