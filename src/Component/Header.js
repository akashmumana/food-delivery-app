import React, { useRef , useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../images/res-logo.png"
import { NavLink, Link } from "react-router-dom";
import { useSelector ,useDispatch } from "react-redux";
import {  cartUiActions } from "../store/shopingcart/CartUiSllice"

const nav_link = [
    {
        dispaly: "Home",
        path: "/home",
    },
    
   
    {
        dispaly: "Food",
        path: "/Food",
    },
    {
        dispaly: "cart",
        path: "/cart",
    },
    
    {
        dispaly: "Contact",
        path: "/contact",
    },

];


export default function Header() {
    const menuRef = useRef(null)
    const headref =useRef(null)
    const totalQuantity =useSelector( state =>state.cart.totalQuantity)

    const dispatch = useDispatch();
    const togglemenu = () => {
        menuRef.current.classList.toggle('show__menu')
    }

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
      };
    useEffect(() => {
        const handleScroll = () => {
          if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
          ) {
            headref.current.classList.add("header_shrink");
          } else {
            headref.current.classList.remove("header_shrink");
          }

        };
      
        
        window.addEventListener("scroll", handleScroll);
      
        
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [headref]); 
      
    return (
        <div>
            <header className="header" ref={headref}>
                <Container>
                    <div className="nav_bar d-flex align-items-center justify-content-between ">
                        <div className="logo">
                            <img src={logo} alt="logoimg" />
                            <h5>testy thert</h5>
                        </div>
                        {/*======menu_bar=====*/}
                        <div className="navigation" ref={menuRef} onClick={togglemenu}>
                            <div className="menu d-flex align-items-center gap-5 ">
                                {
                                    nav_link.map((item, index) => (
                                        <NavLink to={item.path} key={index} className={(navClass) => navClass.isActive ? 'active__menu ' : " "}>{item.dispaly} </NavLink>
                                    ))
                                }
                            </div>

                        </div>

                        {/*=====menu_icon======*/}
                        <div className="nav_icondiv d-flex align-items-center gap-4">
                            <div className="cart_icon">
                                <i class="ri-shopping-basket-2-line" onClick={toggleCart}> </i>
                                <span className="cart__badge" >{totalQuantity}</span>
                            </div>
                            <div className="user">
                                <Link to={'/login'}><i class="ri-user-line"></i></Link>
                            </div>
                            <div className="mobile__menu "  onClick={togglemenu}>
                                <i class="ri-menu-line"></i>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>

        </div>
    )
}
