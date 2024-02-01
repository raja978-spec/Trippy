import './tourpackage.css'
import packageData from '../../packagedata/packagedata'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TourPackages(){

    const data=packageData()
    const navigate=useNavigate();
    
    const[location,setLocation]=useState('')
    const[actualData,setActualData]=useState([])
   
    useEffect(()=>{
        setActualData(data)
        window.scroll({top:0,left:0,behavior:"instant"}) 
        },[])
    
        
    function getLocation(){
        setActualData(
            actualData.filter((e)=>e.location.toLowerCase().includes(location.toLowerCase()))
        )
        
    }

    return(
     <>
            <p className='tour-heading' >Tour Packages</p>
            <div className='tourpackage-input-div"'>
            <input className="tourpackage-input"
             placeholder='Where you are going'
             onChange={(e)=>setLocation(e.target.value)}
            />
            <button 
            className='tourpackage-srch-btn'
            onClick={getLocation}
            ><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>

            <div className='tourpackages-cards'>
                {
                actualData.length !== 0 ? 
                (
                actualData.map((e)=>(
                    <div className='tourpackage-card'
                    onClick={()=>navigate("/view-package", 
                    { state: { id: `${e.id}` } })}
                    >

                        <img 
                        className='tourpackage-img'
                        alt="cannot load" 
                        src={e.img}
                        />
                        
                        <p className='tourpackage-card-loc'>
                        <i style={{ marginRight: "5px"}} class="fa-solid fa-location-dot"></i>
                        {e.location}</p>
                        <p className='tourpackage-card-title' >{e.title}</p>
                        <p className='tourpackage-card-time' >
                        <i style={{ marginRight: "5px"}} class="fa-regular fa-clock"></i>
                            {e.time}
                        </p>

                        
                    </div>
                ))
                
                )
                :
                (<h1>There is no such area</h1>)
                }
            </div>

    </>
    )
}