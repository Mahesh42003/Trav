import {useState} from 'react'
import axios from 'axios'
import {Link,Navigate,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LoginForm=()  => { 
    const [username,setName]=useState("")  //Declaring username
    const [password,setPassword]=useState("") //Declaring Password
    const History=useNavigate()
    const submittingLogin=async (Event) => { 
      
        Event.preventDefault()  //preventing from default behaviour
    
        try{ 
            
        await axios.post("http://localhost:4000/login",{ 
            username,password  
        })
       .then((res) => { 
          if(res.data === "Not Exist"){
            alert("Please Check Your Username And Password")
            
          }
          else if(res.data !== "Not Exist"){  //Checking Data Exist Or Not 
            History("/")                      //If Data not exist it will navigate to home page         
            Cookies.set("jwt",res.data,{expires:30})  //Setting a Token
          } 
       })
    } 
       catch(e){
        console.log(e) //Else it will logged an error
       } 
    }  
    
   const  enteringusername=(Event) =>{  
        setName(Event.target.value)
    }
      
    const enteringpassword=(Event) => {
       setPassword(Event.target.value) 
    } 
   
        const CookieData=Cookies.get('jwt') 
        if(CookieData !== undefined){  //If Token is not undefined it will navigate to home page
            return (
                <Navigate to="/"/>
            ) 
        } 
        
        return( 
            <div className='flexing-of-total-login-item'>
                <form className='background-of-login-form' onSubmit={submittingLogin}>
                    <h1>Login Form</h1>
                    <div className='flexing-of-inside-item'> 
                    <h5>Login</h5> 
                    <Link to="/register">
                      <h5>Registaration</h5>
                    </Link> 
                    </div>  
                    <div className='flexing-of-username-and-password'>
                     <label htmlFor='username'>Username</label>  
                     <input type="text" id="username" onChange={enteringusername}/> 
                     
                        <label htmlFor='password'>Password</label> 
                        <input type="Password" id="password" onChange={enteringpassword}/> 
                        <button className='submit-button-styling' type="submit">Login</button>
                     </div>
                </form>
            </div>
            
        )
    }
     

export default LoginForm