import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollCorrector from './components/scrollCorrector/scroll';
import './App.css';
import './index.css';
import './components/Navbar/Navbar.css';

import Navbar from './components/Navbar/Navbar';

import Home from '../src/components/pages/Home/Home';
import Status from '../src/components/pages/Status/Status';
import Contact from '../src/components/pages/Contact/Contact';
import Footer from '../src/components/pages/Footer/Footer';

function App() {
  return (
    <Router>
        <ScrollCorrector>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/status" element={<Status />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        </ScrollCorrector>
    </Router>
  );
}

export default App;
