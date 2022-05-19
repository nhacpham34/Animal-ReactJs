import './App.css';
import './grid.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Login from './components/login';
import Detail from './components/main/detail';

import React from 'react';
import { BrowserRouter as Router, Navigate , Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes >
        <Route path="/admin" element= {
          localStorage.getItem("accessToken") ? 
          <div className="app">
            <Header />
            <Main />
            <Footer />
          </div> : <Navigate  to="/" />
        } />
        <Route path="/" element={<Login />} />
        <Route path="/Detail" element={
          <div className="app">
            <Header />
            <Detail />
            <Footer />
          </div>} />
      </Routes>
    </Router>
    
  );
}

export default App;
