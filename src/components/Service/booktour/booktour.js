import './booktour.css'

function SelectBox({range,style}){

    const no_of_persons=[]

    for(let i=0; i<=range; i++){
        no_of_persons.push(i)
    }
    

return(
    <select className='select-option'>
    {
        no_of_persons.map((e)=>(
            <option key={e} 
            className='tour-input'
            >{e}</option>
        ))
    }
    </select>

)
}
export default function BootTour(){
    
    return(
        <>
          <h1 className='book-tour-h1'>Book Your Tour</h1>  
          
          <div className='book-tour-form' >
            
            
            <div className='book-tour-departure' >
            <label className='label'>Departure: </label> 
            <input className='book-tour-departure-input' type="date"/>
          
            </div>
            
            <div className='book-tour-select-box'>
            
            <div className='selectbox'>
            <label className='label'>Adults:</label> 
            <SelectBox range={1}/>
            </div>
            
            <div className='selectbox'>
            <label className='label'>Children:</label> 
            <SelectBox range={5}/>
            </div>
            
            <div className='selectbox'>
            <label className='label'>Infant:</label> 
            <SelectBox range={5}/>
            </div>
            
            </div>
            <button className='book-now' >BOOK NOW</button>
          </div>

          
        </>
    )
}