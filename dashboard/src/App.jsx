import React from 'react'
import Home from './pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
