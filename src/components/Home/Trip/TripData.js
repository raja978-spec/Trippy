import './Trip.css'
import {Component} from 'react'

export default class TripData extends Component{
    
    render(){

        return(
            <div className='trip-card' >
               <div className='trip-img' >
                 <img 
                 width={"100px"}
                 
                 src={this.props.i}/>
               </div>
               
               <h2>{this.props.h}</h2>
               <p>
                {this.props.p}
               </p>
            </div>
        )
    }
}