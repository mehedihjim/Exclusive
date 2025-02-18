import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Rootlayout from './components/layout/Rootlayout';
import Products from './pages/Products';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rootlayout />} >
          <Route index path="/" element={<Home />} />
          <Route index path="/products" element={<Products />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
