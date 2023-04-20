import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from '../src/components/pages/Home/Home';
import Status from '../src/components/pages/Status/Status';

function App() {
  return (
    <Router>
        {/* <ScrollToTop> */}
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/status" element={<Status />} />
        </Routes>
        {/* <Footer /> */}
        {/* </ScrollToTop> */}
    </Router>
  );
}

export default App;
