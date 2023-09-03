
import React from "react"
import Button from "../components/Button"

const withButton = (OriginalComponent) => {

   class NewComponent extends React.Component{
        handleClick = () =>{
           
        }
        btnText='hello'
        render() {
            return (
                <div>
                    <OriginalComponent/>
                   <button onClick={this.handleClick}>{this.btnText}</button>
                </div>
            )
        }
        
    }
    return NewComponent

}

export default  withButton