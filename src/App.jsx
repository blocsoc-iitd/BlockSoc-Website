import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Team from './pages/Team';
import Achievements from './pages/Achievements';
import Events from './pages/Events';
import './index.css';
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library

// Initialize AOS
AOS.init({
  duration: 2500, // Duration of animations
});

function App() {
  return (
    <Router>
      <div className="app-background flex flex-col min-h-screen bg-primary bg-custom-gradient">
        <Header />
        <main className="flex-grow justify-center pt-[10vh]" style={{ maxWidth: '1500px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/team" element={<Team />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
