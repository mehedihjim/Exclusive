import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
