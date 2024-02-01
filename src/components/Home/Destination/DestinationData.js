import './Destination.css'
import {Component} from 'react'

export default class DestinationData extends Component{

    
    render(){

        return(
            <div className={this.props.classname ? this.props.classname:"firt-destination"}>
              <div className="destination-txt">
                <h2 className='headertext'>{this.props.header}</h2>
                <p className='destination-p'>
                    {this.props.text}
              </p>
              </div>

              <div className="dest-image" >
                <img alt='cant load' 
                src={this.props.img1}/>
               
                <img alt='cant load' 
               
               src={this.props.img2}/>

           </div>
           </div>

        )
    }
}