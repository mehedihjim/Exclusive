import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from './app/store'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import RootLayout from './layouts/RootLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Signup from './pages/Signup';
import Cart from './pages/Cart.jsx';
import Wishlist from './pages/Wishlist.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='sign-up' element={<Signup />} />
      <Route path='wishlist' element={<Wishlist />} />
      <Route path='cart' element={<Cart />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
