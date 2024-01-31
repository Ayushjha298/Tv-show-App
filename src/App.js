import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import ShowSummary from './components/ShowSummary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/details/:id" element={<ShowDetails />} />
        <Route path="/summary/:id" element={<ShowSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
