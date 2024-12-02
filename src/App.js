import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Page/HomePage';
import Gallery from './Pages/Page/GalleryPage';
import OurTeam from './Pages/Page/OurTeam';
import Events from './Pages/Page/Events';
import Schedule from './Pages/Page/Schedule';




function App() {
  return (
    <Router basename="/Ubuntufest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="events" element={<Events />} />
        <Route path="schedule" element={<Schedule />} />
      </Routes>
    </Router>

  );
}

export default App;
