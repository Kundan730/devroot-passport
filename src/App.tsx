import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MouseTrailer from './components/ui/MouseTrailer';
import ThemeToggle from './components/layout/ThemeToggle';
import Passport from './components/Passport';
import EventsGrid from './components/events/EventsGrid';
import { mockProfile } from './data/mockProfile';
import { mockEvents } from './data/mockEvents';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <MouseTrailer />
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="space-y-12">
                  <h1 className="text-4xl font-bold text-center text-indigo-900 dark:text-indigo-400">
                    DevRoot Passport
                  </h1>
                  <Passport profile={mockProfile} />
                </div>
              } 
            />
            <Route 
              path="/events" 
              element={
                <div className="space-y-12">
                  <h1 className="text-4xl font-bold text-center text-indigo-900 dark:text-indigo-400">
                    Upcoming Events
                  </h1>
                  <EventsGrid events={mockEvents} />
                </div>
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;