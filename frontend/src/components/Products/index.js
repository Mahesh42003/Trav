import {Link,useNavigate,useLocation} from 'react-router-dom'
import Cookies from 'js-cookie'
import ProductsSection from '../ProductsSection'
import './index.css'
import { useState } from 'react'

const listOfAllProducts=[
    {
        id:1,
        Name:"Symbol Men's Cotton Formal Shirt",
        imgLink:"https://m.media-amazon.com/images/I/71avLF5m2yL._SX569_.jpg",
        category:"Shirts",
        price:"1000/-"
    },
    {
        id:2,
        Name:"Symbol Men's Cotton Shirt | Casual",
        imgLink:"https://m.media-amazon.com/images/I/71UnjM6ErlL._AC_UL480_FMwebp_QL65_.jpg",
        category:"Shirts",
        price:"500/-"
    },
    {
        id:3,
        Name:"Rayon Casual Shirt for Men",
        imgLink:"https://m.media-amazon.com/images/I/71U6rN80RIL._SY741_.jpg",
        category:"Shirts",
        price:"280/-"
    },
    {
        id:4,
        Name:"Men's Cotton T Shirt",
        imgLink:"https://m.media-amazon.com/images/I/816m0g-2LWL._AC_UL480_FMwebp_QL65_.jpg",
        category:"T-Shirts",
        price:"250/-"
    },
    {
        id:5,
        Name:"Men's Regular Fit T-Shirt",
        imgLink:"https://m.media-amazon.com/images/I/81uJlVlOlUL._SX569_.jpg",
        category:"T-Shirts",
        price:"750/-"
    },
    {
        id:6,
        Name:"T-Shirt for Men",
        imgLink:"https://m.media-amazon.com/images/I/71zUKs8awdL._SY879_.jpg",
        category:"T-Shirts",
        price:"250/-"
    },
    {
        id:7,
        Name:"ENDEAVOUR WEAR Men's Regular Fit Trackpants",
        imgLink:"https://m.media-amazon.com/images/I/61fuBuxs2yL._AC_UL480_FMwebp_QL65_.jpg",
        category:"Track-Pants",
        price:"350/-"
    },
    {
        id:8,
        Name:"Alan Jones Clothing Men's Slim Fit Track pants",
        imgLink:"https://m.media-amazon.com/images/I/71C7FDDEJbL._SX679_.jpg",
        category:"Track-Pants",
        price:"500/-"
    },
    {
        id:9,
        Name:"gauma Track Pant for Men",
        imgLink:"https://m.media-amazon.com/images/I/611IwJmhdCL._SY741_.jpg",
        category:"Track-Pants",
        price:"1200/-"
    },{
        id:10,
        Name:" Lycra Gym and Night Track Pants",
        imgLink:"https://m.media-amazon.com/images/I/61fXH-OfqeL._SY879_.jpg",
        category:"Track-Pants",
        price:"400/-"
    }
]
const priceRates=[{
    id:1,
    Price:">=200"
},
{
    id:2,
    Price:">=500"
},
{
    id:3,
    Price:">=1000"
},{
    id:4,
    Price:">=1500"
}]

const Products=() => {
    
    const [items,sorted]=useState(listOfAllProducts)
    const History=useNavigate()
    const location=useLocation() 
    const {pathname}=location
    const logouting=() => {  //While click on logout button it will navigate to login page
        Cookies.remove('jwt') 
        History("/login") 
    }  

   
      

    const searchingItem=(Event) =>{   //Filtering the items while searching
        const filteredItems=items.filter(each => each.Name.includes(Event.target.value)) 
        if(filteredItems.length === 0){
            sorted(listOfAllProducts) 
        }
        else{
           sorted(filteredItems)
        }
    } 

    
    
    const selectingValue=(Event) =>{
        
        if(Event.target.value === ">=200"){ //Filtering the items greater than or equal to 200
            const filtered=items.filter(each => parseInt(each.price.replace("/-","")) >=200)
            sorted(filtered)
         }
        if(Event.target.value === ">=500"){ //Filtering the items greater than or equal to 500
           const filtered=items.filter(each => parseInt(each.price.replace("/-","")) >=500)
           sorted(filtered)
        }
        if(Event.target.value === ">=1000"){ //Filtering the items greater than or equal to 1000
            const filtered=items.filter(each => parseInt(each.price.replace("/-","")) >=1000)
            sorted(filtered)
         } 
         if(Event.target.value === ">=1500"){ //Filtering the items greater than or equal to 1500
            const filtered=items.filter(each => parseInt(each.price.replace("/-","")) >=1500)
            sorted(filtered)
         }
    }  

    const clearAllFilters=() => { //While clicking on clear All filters button it will remove all the filters
        sorted(listOfAllProducts) 
    }
    
    return( 
        <div> 
            <nav className='flexing-of-nav-items'>
                <Link to="/" className='products-route-decoration'>Home</Link>
                <Link to="/products" className={pathname === "/products" ?'route-styling':'products-route-decoration'}>Products</Link>
                <Link to="/cart" className='products-route-decoration'>Cart</Link>
                <select onChange={selectingValue} className='selecting-value'>
                {
                    priceRates.map(each => <option key={each.id}>{each.Price}</option>)
                } 
                </select>
                <button onClick={clearAllFilters} className='clear-all-filters'>Clear All Filters</button>
                <button onClick={logouting} className='log-out-styling'>Logout</button>
            </nav> 
            <input type="search" placeholder='Search Any Item' onChange={searchingItem} className='searching-of-serch-input-item'/>
            <ul className='total-unordered-list-width'>
                {
                    items.map(each => 
                        <ProductsSection ProductData={each} key={each.id}/>
                    )
                }
            </ul>
            </div>
    )
} 
export default Products