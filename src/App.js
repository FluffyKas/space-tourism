import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import json from './assets/data.json';

function App() {

  return (
    <>
      <Header />
      <main>
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
