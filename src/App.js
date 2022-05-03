import './assets/global-styles/utilities.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components//header/Header';
import { HomePage } from './pages';
import { Destination } from './pages';
import { Crew } from './pages';
import { Technology } from './pages';
import json from './assets/data.json';
import { AnimatePresence } from "framer-motion";

function App() {

  return (
    <>
      <Header />
      <AnimatePresence>
        <main id="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destination" element={<Destination data={json.destinations} />} />
            <Route path="/crew" element={<Crew data={json.crew} />} />
            <Route path="/technology" element={<Technology data={json.technology} />} />
          </Routes>
        </main>
      </AnimatePresence>
    </>
  );
}

export default App;
