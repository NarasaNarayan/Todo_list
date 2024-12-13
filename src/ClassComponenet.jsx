import { Component } from "react";

class ClassComponent extends Component{
    render(){
        const{name,salary}=this.props
        return(
           <div>
             <div>hello world</div>
            <p>{name}</p>
            <p>{salary}</p>
           </div>
        )
    }
}
export default ClassComponent;