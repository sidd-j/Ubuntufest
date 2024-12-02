import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Page/HomePage';
import RegistrationPage from './Pages/Page/RegistrationPage';
import LoginPage from './Pages/Page/LoginPage';
import Gallery from './Pages/Page/GalleryPage';
import OurTeam from './Pages/Page/OurTeam';
import Events from './Pages/Page/Events';
import Schedule from './Pages/Page/Schedule';
import ProfilePage from './Pages/Page/ProfilePage';
import EventRegistrationPage from './Pages/Page/EventRegisterPage';
import SplineR from './Pages/Page/SplineViewer';




function App() {
  return (
    <Router basename="/Ubuntufest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="events" element={<Events />} />
        <Route path="EventRegistrationPage" element={<EventRegistrationPage />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </Router>

  );
}

export default App;
