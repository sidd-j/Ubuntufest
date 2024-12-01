import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Page/HomePage';
import RegistrationPage from './Pages/Page/RegistrationPage';
import LoginPage from './Pages/Page/LoginPage';
import Gallery from './Pages/Page/GalleryPage';
import Events from './Pages/Page/Events';
import Schedule from './Pages/Page/Schedule';
import ProfilePage from './Pages/Page/ProfilePage';
import EventRegistrationPage from './Pages/Page/EventRegisterPage';
import SplineR from './Pages/Page/SplineViewer';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Ubuntufest" element={<HomePage />} />
        <Route path="/Ubuntufest/gallery" element={<Gallery />} />
        <Route path="/Ubuntufest/profile" element={<ProfilePage />} />
        <Route path="/Ubuntufest/events" element={<Events />} />
        <Route path="/Ubuntufest/EventRegistrationPage" element={<EventRegistrationPage />} />
        <Route path="/Ubuntufest/schedule" element={<Schedule />} />
        <Route path="/Ubuntufest/registration" element={<RegistrationPage />} />
        <Route path="/Ubuntufest/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
