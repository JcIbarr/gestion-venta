import React, { Component } from 'react'
import Axios from "axios";
class Botones extends Component {
    rellenarForm=()=>{
        if(this.props.type == "Ventas"){ 
             
             document.getElementById(`idVentaEdit${this.props.type}`).value =   this.props.info.id  ;
             document.getElementById(`nameMetalEdit${this.props.type}`).value =    this.props.info.nameMetal ;
             document.getElementById(`precioEdit${this.props.type}`).value =    this.props.info.Unitcost ;
             document.getElementById(`UnidadesEdit${this.props.type}`).value =    this.props.info.amount ;
             document.getElementById(`totalCostEdit${this.props.type}`).value =    this.props.info.totalCost ;
             document.getElementById(`nameClientEdit${this.props.type}`).value =    this.props.info.nameClient ;
             document.getElementById(`clientEdit${this.props.type}`).value =    this.props.info.idClient ;
             document.getElementById(`correoEdit${this.props.type}`).value =    this.props.info.correoClient ; 
             document.getElementById(`dirEdit${this.props.type}`).value =    this.props.info.dirClient ;
             document.getElementById(`vendedorEdit${this.props.type}`).value =   this.props.info.seller ;
             
        }
    }
    delete = () =>{
        if(this.props.type == "Ventas"){
            alert(this.props.id);
            Axios.delete( `http://localhost:3001/api/Ventas/delete/${this.props.id}` )
        }
    }
    showForm = () => {
        const id = `panEditar${this.props.type}`
        console.log(id)
        document.getElementById(id).style.display="Block";
        this.rellenarForm();
   }
    render(){

        return (
            <div class="dropdown">
                <button class="btn  bg-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <button class="dropdown-item" id={"info"+ this.props.id} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                            </svg>
                            Información  
                        </button>
                    </li> 
                    <li>
                        <button class="dropdown-item" id={"edit"+ this.props.id} onClick={this.showForm}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                            </svg> 
                            Editar 
                        </button>
                    </li>
                    <li>
                        <button class="dropdown-item" id={"delete"+ this.props.id} onClick={this.delete}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                            Eliminar 
                        </button>
                    </li>             
                </ul>
            </div>
        )
    }
}
export default Botones
