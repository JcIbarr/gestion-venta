import React, {Component} from 'react'
import { getStyleObjectFromString } from "../utils/stringUtils";
import "./style.css"

 
class Encabezado extends  Component{

   showForm = () => {
        const id = `panRegistrar${this.props.subtitle}`
        console.log(id)
        document.getElementById(id).style.display="Block";
   }

    render(){
        return (
                <div class="Panel-Encabezado shadow-sm" style= {{width: "100%"}}>                    
                    <div class="d-flex _3mYbO px-5 align-self-center Texto-encabezado">
                        <h1>
                        {this.props.subtitle}
                        </h1>
                    </div>
                    
                    <div  class="d-flex px-3">
                        <button type="button" class=" ov-btn-slide-left rounded-pill" id={"btnagregar"+ this.props.subtitle} onClick= {this.showForm}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" class="buttonnext246841004__prefix" data-hook="prefix-icon"><path d="M12 12L12 6 11 6 11 12 5 12 5 13 11 13 11 19 12 19 12 13 18 13 18 12z"></path></svg> Registrar {this.props.element}</button>
                    </div>

                    
                
                </div>
            
        )
    }
}
 

export default Encabezado
