import React from "react";
import { Routes,Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import FoodDetails from '../pages/FoodDetails';
import Checkout from '../pages/Chaeckout';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from "../pages/Cart";
import Food from "../pages/Food";





export default function Routar() {
  return (
        <Routes>
             <Route path='/' element={<Navigate to='home'/>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/Food' element={<Food></Food>}></Route>
            <Route path='/Food/:id' element={<FoodDetails></FoodDetails>}></Route>
            <Route path='/checkout' element={<Checkout></Checkout>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
  )
}
