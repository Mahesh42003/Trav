import { Component } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import CartContext from './context/CartContext'
import NotFound from './components/NotFound'
import './App.css'
class App extends Component {
  state={cartList:[]}

  deleteCartItem = id1 => {
    const {cartList} = this.state
    const filteredList = cartList.filter(each => each.id !== id1)
    this.setState({cartList: filteredList})
  }

  addCartItem = (product) => {
    const {cartList} = this.state
    let value = []
    value = cartList.map(each => {
      if (each.id === product.id) {
        return {
          id: each.id,
          Name:each.Name,imgLink:each.imgLink,category:each.category,price:each.price,quantity:each.quantity+1
        }
      } 
      return {
        id: each.id,
        Name:each.Name,imgLink:each.imgLink,category:each.category,price:each.price,quantity:each.quantity
      }
    })
    const filteringEach = cartList.filter(each => each.id === product.id)

    if (filteringEach.length === 1) {
      this.setState({cartList: value})
    }
    if (filteringEach.length === 0) {
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    } 
  } 

  removeAllCartItems=() => {
    this.setState({cartList: []})
  } 

  incrementCartItemQuantity = id1 => {
    const {cartList} = this.state
    const mapping = cartList.map(each => {
      if (each.id === id1) {
        return {
          id: each.id,
          Name:each.Name,imgLink:each.imgLink,category:each.category,price:each.price,quantity:each.quantity+1
        }
      }
      return {
        id: each.id,
          Name:each.Name,imgLink:each.imgLink,category:each.category,price:each.price,quantity:each.quantity+1
      }
    })
    this.setState({cartList: mapping})
  }

  decrementCartItemQuantity = (id1, quan) => {
    const {cartList} = this.state
    
    if (quan > 1) {
      const mapping = cartList.map(each => {
        if (each.id === id1) {
          return {
            id: each.id,
            Name:each.Name,imgLink:each.imgLink,category:each.category,price:each.price,quantity:each.quantity-1
          }
        }
        return {
          id: each.id,
          Name:each.Name,imgLink:each.imgLink,category:each.category,price:each.price,quantity:each.quantity
        }
      })
      this.setState({cartList: mapping})
    }
  }

  render(){
    const {cartList}=this.state
  return(
  <BrowserRouter> 
    <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            deleteCartItem: this.deleteCartItem,
            decrementCartItemQuantity: this.decrementCartItemQuantity,
            incrementCartItemQuantity: this.incrementCartItemQuantity,
            removeAllCartItems: this.removeAllCartItems,
          }}
        >
    <Routes>
      <Route exact path="/login" element={<LoginForm/>}/> 
      <Route exact path="/register" element={<RegistrationForm/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route path="/not-found" element={<NotFound/>} />
     </Routes>  
     </CartContext.Provider>
  </BrowserRouter> 
  )
  } 
}
export default App;
    