import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';

import Login from './Components/Login';
import SignUp from './Components/Signup';
import LandingPage from './Components/LandingPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/landingpage" element={<LandingPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
