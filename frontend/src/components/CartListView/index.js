import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      
      let value2 = 0 
      for (let i = 0; i < cartList.length; i = i + 1) {
        const value3=cartList[i].price.replace("/-","")
        value2 += cartList[i].quantity * parseInt(value3)
      }
      return ( 
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
          <div className="line-height">
            <h1>Order Total:Rs {value2}/-</h1> 
            <p>{cartList.length} Items in cart</p>
            <button>Checkout</button>
          </div>
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
