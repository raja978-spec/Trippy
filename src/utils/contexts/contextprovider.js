import { useContext, useState} from "react";
import packageData from "../../components/packagedata/packagedata";
import userContext from "./context";
import { useNavigate } from "react-router-dom";
export default function ContextProvider({children}){
       
    const data=packageData()
    const [user,setUser]=useState();
    const[contextData,setcontextData]=useState(data);
    const [userlang,langGetter]=useState('');
    const navigate=useNavigate();

    const login=(user)=>{                
        setUser(user)
    }

    const logout=()=>{
        setUser(null)
    }

    const handelLike=(id)=>{
        let d=contextData.filter(
            (e)=>{
                if(e.id===id){
                    e.like=!e.like
                }
            }
        )
        setcontextData([...contextData,{d}])
        
    }

    const choosenLanguage=(lang)=>{
        langGetter(lang)
        navigate('/user-lang')
     }
     
    return(
        <userContext.Provider value={{user,login,
        logout,handelLike,
        contextData,
        choosenLanguage,
        userlang
        }}>
            {children}
        </userContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(userContext)
}