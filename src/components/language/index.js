import { useContext, useState } from 'react';
import '../Contact/Contact.css';
import userContext from '../../utils/contexts/context';

export default function LanguageChanger(){

    const Data=useContext(userContext)

    const [lang,setLang]=useState('');

    return(
        <div className="main-ft-contact" >
         <div className="main-contact">
            <h1>Choose your Language</h1>
            <input placeholder="Select" onChange={
            (e)=>setLang(e.target.value)
            } ></input>
            <button onClick={()=>Data.choosenLanguage(lang)} >Submit</button>
        </div>
        </div>
        
    )
}