import React, {Component} from 'react'
import { getStyleObjectFromString } from "../utils/stringUtils";
import Axios from "axios";
import swal from 'sweetalert';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class  Actualizar extends Component{

    
    constructor(props){
        super(props);
        if(this.props.type == "Ventas"){ 
            this.state = {
                id_update: "",
                nameMetal_update:"",
                Unitcost_update:0,
                amount_update:0,
                totalCost_update:0,
                nameClient_update:"",
                idClient_update:"",
                correoClient_update:"", 
                dirClient_update:"",
                seller_update:"",
            };
        }
      }
     

    actualizar=()=>{
        const date = new Date();
        if(this.props.type == "Ventas"){     
            
            const  id_update = document.getElementById(`idVentaEdit${this.props.type}`).value  ;
            const nameMetal_update =  document.getElementById(`nameMetalEdit${this.props.type}`).value ;
            const  Unitcost_update =  document.getElementById(`precioEdit${this.props.type}`).value  ;
            const  amount_update = document.getElementById(`UnidadesEdit${this.props.type}`).value  ;
            const  totalCost_update = document.getElementById(`totalCostEdit${this.props.type}`).value  ;
            const nameClient_update =  document.getElementById(`nameClientEdit${this.props.type}`).value  ;
            const idClient_update =  document.getElementById(`clientEdit${this.props.type}`).value  ;
            const correoClient_update =  document.getElementById(`correoEdit${this.props.type}`).value  ;
            const  dirClient_update =  document.getElementById(`dirEdit${this.props.type}`).value  ;
            const  seller_update =  document.getElementById(`vendedorEdit${this.props.type}`).value  ;
              
             
            Axios.put("http://localhost:3001/api/sales/update/",{
                
                id: id_update,
                nameMetal: nameMetal_update   ,
                Unitcost: Unitcost_update  ,
                amount: amount_update  ,
                totalCost: totalCost_update   ,
                nameClient: nameClient_update  ,
                idClient: idClient_update   ,
                correoClient:  correoClient_update ,
                dirClient: dirClient_update ,
                seller: seller_update  ,
                fecha:date 
            })
            document.getElementById(`FormEdit2${this.props.type}`).reset();
            swal("Muy bien!", "La venta se actualizó correctamente!", "success");
        }
        document.getElementById(`FormEdit${this.props.type}`).reset();
        this.cerrar()
    }
 
  cerrar =()=>{
    const id = `panEditar${this.props.type}`
    console.log(id)
    document.getElementById(id).style.display="none";
}
  render(){   
    if(this.props.type == "Ventas"){   
        return (   
            <div id={"panEditar" + this.props.type} className = "panRegistrar" >   
                            
                {/* <!-- Formulario registro --> */}
                <div class="Formulario-registrar  shadow   Texto-encabezado rounded bg-white w-50"   id= {"reg-form" + this.props.type}>
                    <div>
                    <div>
                        <h3 style={getStyleObjectFromString("color:#0d6efd; padding: 2%; padding-bottom: 4%; position: relative; text-align: center; justify-content: center")}>
                        Editar Venta
                        </h3>
                    </div>
                    <div style={getStyleObjectFromString("display: flex;  justify-content: space-around; color: #284b63;")}>

                        <div class="px-2 " style={getStyleObjectFromString("position:relative;  justify-content: center;")}> 

                        <h4 style={getStyleObjectFromString("padding-bottom:4% ;")} >Información Venta:</h4>  

                            <div>  
                            <form class="row g-3 buscador" id={"FormEdit"+ this.props.type}>                                       

                                <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"idVentaEdit"+this.props.type} name={"idVentaEdit"+this.props.type} placeholder="Identificación" readOnly={true}/>
                                <label for={"idVentaEdit"+this.props.type} >Id:</label>                      
                                </div>

                                
                                <div class="col-md-12 form-floating">
                                <label class="visually-hidden" for={"nameMetalEdit"+this.props.type}>Nombre</label>
                                    <select class="form-select" id={"nameMetalEdit"+this.props.type} name={"nameMetalEdit"+this.props.type}  >
                                    <option selected>Seleccionar Metal</option>
                                    <option value="Acero">Acero</option>
                                    <option value="Acero-inoxidable">Acero inoxidable</option>
                                    <option value="Aluminio">Aluminio</option>
                                    <option value="Aluminio-3010">Aluminio 3010</option>
                                    <option value="Aluminio-6060">Aluminio 6060</option>
                                    <option value="Laton">Laton</option>
                                    </select>
                                </div>


                                
                                <div class="col-md-6 form-floating">
                                <input type="number" class="form-control" id={"UnidadesEdit"+this.props.type} name={"UnidadesEdit"+this.props.type} placeholder="Unidades"  onChange = {
                                            (e)=>{ const c = document.getElementById(`UnidadesEdit${this.props.type}`).value;
                                            const p = document.getElementById(`precioEdit${this.props.type}`).value; console.log(p);
                                            document.getElementById(`totalCostEdit${this.props.type}`).value = p*c;  }}/>
                                <label for={"UnidadesEdit"+this.props.type} >Unidades</label>
                                
                                </div>
                                <div class="col-md-6 form-floating">

                                <input type="number" class="form-control" id={"precioEdit"+this.props.type} name={"precioEdit"+this.props.type} placeholder="Precio unidad" onChange = {
                                            (e)=>{ const c = document.getElementById(`UnidadesEdit${this.props.type}`).value;
                                            const p = document.getElementById(`precioEdit${this.props.type}`).value; console.log(p);
                                            document.getElementById(`totalCostEdit${this.props.type}`).value = p*c;  }}  />
                                <label for={"precioEdit"+this.props.type} >Precio unidad</label>
                                
                                </div>

                                <div class=" form-floating">                      
                                <input type="number" class="form-control" id={"totalCostEdit"+this.props.type} name={"totalCostEdit"+this.props.type} placeholder="Precio total"   />
                                
                                <label for={"totalCostEdit"+this.props.type} >Precio total</label>
                                </div> 
                                                    
                            </form>

                            
                            </div>               
                        
                        </div>

                        <div  class="px-2" style={getStyleObjectFromString("position:relative;  justify-content: center;")}>
                        <h4  style={getStyleObjectFromString("padding-bottom:4% ;")}>Información Cliente:</h4> 
                        <div>  
                            <form class="row g-3" id={"FormEdit2"+ this.props.type}> 
                            
                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"nameClientEdit"+this.props.type} name={"nameClientEdit"+this.props.type} placeholder="Nombre"  />
                                <label for={"nameClientEdit"+this.props.type} >Nombre </label>                      
                            </div>


                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"clientEdit"+this.props.type} name={"clientEdit"+this.props.type} placeholder="Identificación"  />
                                <label for={"clientEdit"+this.props.type} >Identificación</label>                    
                            </div>

                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"correoEdit"+this.props.type} name={"correoEdit"+this.props.type} placeholder="Correo"  />
                                <label for={"correoEdit"+this.props.type} >Correo</label>                      
                            </div>

                            <div class="col-12 form-floating">
                                <input type="text" class="form-control" id={"dirEdit"+this.props.type} name={"dirEdit"+this.props.type} placeholder="Dirreccion"  />
                                <label for={"dirEdit"+this.props.type}>Dirreccion</label>                      
                            </div>
                            <div class="col-md-12 form-floating">
                                <label class="visually-hidden" for={"vendedorEdit"+this.props.type}>Vendedor</label>
                                <select class="form-select" id={"vendedorEdit"+this.props.type} name={"vendedorEdit"+this.props.type} >
                                <option selected>Seleccionar vendedor</option>
                                <option value="Vendedor 1">Vendedor 1</option>
                                <option value="Vendedor 2">Vendedor 2</option>
                                <option value="Vendedor 3">Vendedor 3</option>
                                </select>
                            </div>
                            <div class="col-md-12 form-floating">
                                <div   style={getStyleObjectFromString("display: flex; align-self:baseline; flex-direction: colum;")}>
                                <div  class="px-2 py-2"  style={getStyleObjectFromString("width: 110px; position: relative ;left: 32%; justify-content: center;")}>
                                    <button type="button" class="btn btn-outline-danger rounded-pill" id="CancelarregisBtn" onClick={this.cerrar}>
                                    Cancelar
                                    </button>
                                </div>
                                <div  class="px-2 py-2" style={getStyleObjectFromString("width:  110px; position: relative ;left: 32%; justify-content: center;")}>
                                    <button type="button"  class="btn btn-outline-primary rounded-pill" id={"confirmarEditBtn"+this.props.type} onClick={this.actualizar}>
                                    Aceptar 
                                    </button>
                                </div>            
                                </div>
                            </div>                                      
                            </form>                
                        </div>  
                        </div>
                    </div>  
                    </div>        
                </div>                     
            </div>
        )
    }
    }
}
export default Actualizar;