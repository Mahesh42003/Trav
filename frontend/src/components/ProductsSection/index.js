import {useState} from 'react'

import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import CartContext from '../../context/CartContext';
import './index.css'

const ProductsSection=(props) => {
    const {ProductData}=props 
    const {Name,imgLink,price}=ProductData 
    const [quantity,AddingQuantity] =useState(1)

    
 
    const addingToCart=() => {AddingQuantity(quantity+1)} //While Click on add to cart button the item will move to cart
    const deletingToCart=() => {  //while click on delete quantity button the item will decrease in cart
        if(quantity <= 1){ //If quantity is less than or equal to 1 we did not decrease the item
            AddingQuantity(quantity)
        }
        else{
        AddingQuantity(quantity-1)
        }
    }
    
       return(
       
        <CartContext.Consumer>
          {
            value => {
                const {addCartItem} = value
                const addToCart=() => {
                    addCartItem({...ProductData,quantity})
                } 

            return(
            <li className='list-style-type-product'>
            <img src={imgLink} alt={Name} className="each-image-product-size"/>
            <div className='only-name-styling'>
            <h5 className='width-of-Name'>{Name}</h5>
            <p className='text-align-of-price'>{price}</p>
            <button className='add-to-cart-button' onClick={addToCart}>Add to Cart</button>
            <div className='flexing-of-plus-and-minus-icons'>
            <CiCircleMinus className='plus-styling' onClick={deletingToCart}/>
                 <p className='quantity-styling'>{quantity}</p>
               <CiCirclePlus className='plus-styling'  onClick={addingToCart}/> 
            </div> 
            </div>
        </li>)  
            }}  
        </CartContext.Consumer>
     )
}  
export default ProductsSection  