import { Component, createRef } from "react"
import { Link,withRouter } from "react-router-dom"

class Main extends Component{

    constructor(props){
        super(props);
        this.inputRef=null;

        this.setRef=(element)=>{
            this.inputRef=element
        }
    }

    componentDidMount(){
        this.inputRef.focus()
    }

    render(){
        return(
            <>
            <input ref={this.setRef}/>
            </>
        )
    }
}
export default Main
