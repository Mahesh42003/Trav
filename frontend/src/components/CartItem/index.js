import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const { 
        deleteCartItem,
        
        incrementCartItemQuantity,
        decrementCartItemQuantity,
       
      } = value
      const {cartItemDetails} = props
      const {Name,imgLink,category,price,id,quantity} = cartItemDetails 
      
      const onDeleteCartItem = () => { //While deleting the item in cart the item should be removed from cart
        deleteCartItem(id)
      } 
 
      const addingCartItem = () => { //We have to increase the quantity of item in cart  while click on adding symbol
        incrementCartItemQuantity(id, quantity)
      }

      const deletingQuantity = () => { //We have to decrease the quantity of item in cart while click on delete symbol
        decrementCartItemQuantity(id, quantity)
      }
      const value4=parseInt(price.replace("/-","")) 
      return ( 
        <div>
          <li className="cart-item">
            <img className="cart-product-image" src={imgLink} alt={imgLink} />
            <div className="cart-item-details-container">
              <div className="cart-product-title-brand-container">
                <p className="cart-product-title">{Name}</p>
                <p className="cart-product-brand">by {category}</p>
              </div>
              <div className="cart-quantity-container">
                <button type="button" className="quantity-controller-button">
                  <BsDashSquare
                    color="#52606D"
                    size={12}
                    onClick={deletingQuantity}
                    alt="dash"
                    data-testid="minus"
                  />
                </button>
                <p className="cart-quantity">{parseInt(quantity)}</p>
                <button type="button" className="quantity-controller-button">
                  <BsPlusSquare
                    color="#52606D"
                    size={12}
                    onClick={addingCartItem}
                    alt="plus"
                    data-testid="plus"
                  /> 
                </button>
              </div>
              <div className="total-price-delete-container">
                <p className="cart-total-price">Rs {value4 * quantity}/-</p>
                <button
                  className="remove-button"
                  type="button"
                  onClick={onDeleteCartItem}
                >
                  Remove
                </button>
              </div>
            </div>
            <button
              className="delete-button"
              type="button"
              onClick={onDeleteCartItem}
            >
              <AiFillCloseCircle color="#616E7C" size={20} alt="circle" />
            </button>
          </li>
        </div>
      )
    }}
  </CartContext.Consumer>
) 

export default CartItem
