
import React from "react"

const UpdatedComponent = (OriginalComponent) => {

   class NewComponent extends React.Component{
        handleClick = () =>{
            console.log('hello from hoc')
        }
        btnText='Click Me'
        render() {
            return <OriginalComponent handleClick={this.handleClick} btnText={this.btnText}/>
        }
        
    }
    return NewComponent

}

export default  UpdatedComponent