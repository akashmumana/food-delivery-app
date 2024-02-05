import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopingcart/cartSlice";


export default function Productcard(props) {

    const { id, title, image01 ,price} =props.item;
    const dispatch = useDispatch();
    const  addtocart =()=>{
        dispatch(
            cartActions.addItem({
              id,
              title,
              image01,
              price,
            })
          );
    }

    return (
        <div>
            <div className='product__item'>
                <div className='product__img'> <Link to={`/Food/${id}`}><img src={image01} alt='Product Img' className='w-50'></img>
                </Link> </div> <div className='product__content'>
                    <h5><Link to={`/Food/${id}`}>{title}</Link></h5>
                    <div className='d-flex align-items-center justify-content-between'>
                        <span className='product__price'>${price}</span>
                        <button className='addTOCART__btn' onClick={addtocart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

