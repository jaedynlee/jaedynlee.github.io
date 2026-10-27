import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router";
import ScrollToTop from './ScrollToTop';
import './App.css';

import Home from "./containers/Home";
import Art from "./containers/art/Art";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
