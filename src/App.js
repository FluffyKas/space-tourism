import './global-styles/utilities.scss'
import { Routes, Route } from 'react-router-dom';
import Header from './components//header/Header';
import HomePage from './components/homepage/HomePage';
import Destination from './components//destination/Destination';
import Crew from './components/crew/Crew';
import Technology from './components/technology/Technology';
import json from './assets/data.json';

function App() {

  return (
    <>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<Destination data={json.destinations} />} />
          <Route path="/crew" element={<Crew data={json.crew} />} />
          <Route path="/technology" element={<Technology data={json.technology} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
