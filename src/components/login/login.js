import { useState,useEffect,useContext } from 'react'
import '../Contact/Contact.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/contexts/contextprovider';
import userContext from '../../utils/contexts/context';

export default function Login(){
  
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const auth=useContext(userContext);
    const navigate=useNavigate();

    const clickHandler=()=>{
        auth.login(email)
        navigate('/')

    }

    return(
        <div className="main-ft-contact" >
         <div className="main-contact">
            <h1>Login</h1>
            <input placeholder="Email"
            type='email'
            onChange={(e)=>setEmail(e.target.value)}
            ></input>
            <input placeholder="Password"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            ></input>
            <button onClick={clickHandler} >Login</button>
              <h1 style={{textAlign:"center", color:"blue"}}>OR</h1>
              <Link to={'/signup'} ><button>SignUp</button></Link>
            
        </div>
        </div>
        
    )
}