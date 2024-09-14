import { Link, useNavigate,Navigate,useLocation} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Home=() => {
    const History=useNavigate()
    const location=useLocation()
    const {pathname}=location
    const logouting=() => {      //When User Clicks on logout it will navigate to login page
        Cookies.remove('jwt') 
        History("/login") 
    } 
    const CookieData=Cookies.get("jwt")  
    
    
    if(CookieData === undefined){  //If Cookie Data is undefined it will navigate to login
        return(
        <Navigate to="/login"/> 
       
        )
    }  
   
    return(
        
        <div>
            <nav className='flexing-of-nav-items'>
                <Link to="/" className={pathname === "/" ? 'route-styling':'products-route-decoration'}>Home</Link>
                <Link to="/products" className='products-route-decoration'>Products</Link>
                <Link to="/cart" className='products-route-decoration'>Cart</Link>
                <button onClick={logouting} className='log-out-styling'>Logout</button>
            </nav>
            <h1 className="text-align-of-land-page-heading">Welcome to New World of Outfit Culture.<br/>We make you deliver quality items with low cost.</h1>
            <img src="https://img.freepik.com/free-photo/horizontal-shot-white-womens-clothing-hanging-racks-isolated-yellow-background-dressing-room-with-female-outfits_273609-32910.jpg" className='styling-of-outfit-image' alt="Home"/>
        </div>
    )
}  
export default Home 