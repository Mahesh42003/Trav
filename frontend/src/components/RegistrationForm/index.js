import {useState} from 'react' 
import axios from 'axios'
import { Link,Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const RegistrationForm=() => {
    const [username,setUserName]=useState("") //Declaring Username
    const [password,setPassword]=useState("") //Declaring Password
    
    const registeringusername=(Event) => {
        setUserName(Event.target.value)  //Setting Username
    }
    const registringpassword=(Event) => { 
        setPassword(Event.target.value)  //Setting Password
    }  
    const register=async (Event) =>{ 
        Event.preventDefault()           //Preventing Default Behaviour 
        try{  
            await axios.post("http://localhost:4000/register",{
                username,password
            })  
            .then(res => {
                if(res.data === "exist"){        //Checking Whether username and password already exists.
                    alert("User Already Exists")
                } 
                else if(res.data === "not exist"){  //If Not Exist We have to creating Account
                    alert("Creating The Account")
                }
            })
        }
           catch(e){ 
            console.log(e) //Any Error Occurs It will be logged into console
           } 
    } 
    const CookieData=Cookies.get('jwt') //Retriving the cookie data
    
    if(CookieData !== undefined){  //Checking Token has not equal to undefined
        return(
            <Navigate to="/login"/>
        )
    }
    return( 
        <div className='flexing-of-total-login-item'>
            <form className='background-of-login-form' onSubmit={register}> 
                <h1>Registration Form</h1>
                <div className='flexing-of-inside-item'>
                <Link to="/login">
                <h5>Login</h5> 
                </Link> 
                <h5>Registaration</h5> 
                </div>  
                <div className='flexing-of-username-and-password'>
                 <label htmlFor='username'>Username</label> 
                 <input type="text" id="username" onChange={registeringusername} placeholder='Enter User Name'/> 
                 
                    <label htmlFor='password'>Password</label> 
                    <input type="Password" id="password" onChange={registringpassword} placeholder='Enter Password'/> 
                    <button className='submit-button-styling' type="submit">Register</button>
                 </div>
            </form> 
        </div>
    )
}

export default RegistrationForm


