
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'
 
const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      const removing = () => {  //While Clicking on remove all button the items in the cart should be empty
        removeAllCartItems()
      }
      return (
        <> 
          
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button onClick={removing}>Remove All</button>
                <CartListView />
              </div>
            )} 
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
