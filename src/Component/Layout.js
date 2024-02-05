import React from 'react'
import Header from'./Header'
import Footer from './Footer'
import Routar from '../Routes/Routar';
import { useSelector } from "react-redux";
import Carts from "../Component/Carts"



export default function Layout() {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
        <Header></Header>
      {showCart && <Carts />}
          
        <div>
            <Routar></Routar>
        </div>
      <Footer></Footer>
    </div>
  )
}
