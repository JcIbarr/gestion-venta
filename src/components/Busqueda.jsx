import React, {Component} from 'react'
import { getStyleObjectFromString } from "../utils/stringUtils";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Busqueda  extends Component{
  render(){     
        return (               
            //    Panel donde se encuentra la sección de busqueda  
            <div class="Panel-Busqueda  justify-content-lg-end ">  
                <div class="align-self-center px-2" style={getStyleObjectFromString(" display: flex; flex-direction: row;")}>      
                <input id = {"barrabusqueda"+ this.props.subtitle}class="form-control p-2 rounded-pill icon-placerholder buscador " type="search" aria-label="Search" />
                </div>
                <div  class="p-2" >        
                <button type="button"  style={getStyleObjectFromString("background-color: #F1E529;border-color: #F1E529;color:#000;display: flex; flex-direction: row;")} class="btn-primary rounded-pill" id={"btnbuscar"+ this.props.subtitle}> 
                    <div class="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    </div>
                    <span class="align-self-center px-1">
                   {" Buscar " + this.props.subtitle.toLowerCase()}
                    </span>        
                </button>
                </div>
            </div>
            )
    }
}

export default Busqueda
