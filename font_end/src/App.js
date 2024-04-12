import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Template/User/Pages/Home/Home';
import About from '../src/Template/User/Pages/About/About';
import Register from '../src/Template/User/Pages/Register/Register';
import Login from '../src/Template/User/Pages/Login/Login';
import ListProduct from '../src/Template/User/Pages/ListProduct/ListProduct';
import Detail from '../src/Template/User/Pages/Detail/Detail';
import Contact from '../src/Template/User/Pages/Contact/Contact';
import Cart from '../src/Template/User/Pages/Cart/Cart';
import Profile from '../src/Template/User/Pages/Profile/Profile';
import MasterLayout from '../src/Template/User/Layouts/MasterLayout';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route path='' element={<MasterLayout Page={<Home />} />} />
        <Route path='about' element={<MasterLayout Page={<About />} />} />
        <Route path='register' element={<MasterLayout Page={<Register />} />} />
        <Route path='login' element={<MasterLayout Page={<Login />} />} />
        <Route path='shop' element={<MasterLayout Page={<ListProduct />} />} />
        <Route path='detail/:id' element={<MasterLayout Page={<Detail />} />} />
        <Route path='contact' element={<MasterLayout Page={<Contact />} />} />
        <Route path='cart' element={<MasterLayout Page={<Cart />} />} />
        <Route path='profile' element={<MasterLayout Page={<Profile />} />} />
      </Route>
      <Route path='/admin'>

      </Route>
    </Routes>
  );
}

export default App;
