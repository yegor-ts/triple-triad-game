import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Biography from './pages/Biography/Biography';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="bio/:id" element={<Biography id={1011334} />} />
      </Route>
    </Routes>
  );
}

export default App;
