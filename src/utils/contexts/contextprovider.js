import { useContext, useState} from "react";
import packageData from "../../components/packagedata/packagedata";
import userContext from "./context";

export default function ContextProvider({children}){
       
    const data=packageData()
    const [user,setUser]=useState();
    const[contextData,setcontextData]=useState(data);
       
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
    return(
        <userContext.Provider value={{user,login,
        logout,handelLike,
        contextData,
        }}>
            {children}
        </userContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(userContext)
}