import React, {Component} from 'react'
import { getStyleObjectFromString } from "../utils/stringUtils";
import Axios from "axios";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Botones from './Botones';

class  Tabla extends Component{
  constructor(props) {
    super(props);

    if (this.props.type == "Ventas"){
      this.state = {
        sales:[]
      };
    }  
  }
  noInfo=()=>{
    const panInfo = document.getElementById(`Info-nodata${this.props.type}`)
    if (this.props.type == "Ventas"){
      if (this.state.sales.length ==0){
        panInfo.style.display = "flex";
      }else {
        panInfo.style.display = "none";
      }
    }
  }

  componentDidMount() {
    if (this.props.type == "Ventas"){
      Axios.get("http://localhost:3001/api/sales/list/").then((res) =>{this.setState({sales: res.data.sales})});
    this.noInfo()}
    
  }
  componentDidUpdate() {
    if (this.props.type == "Ventas"){
      Axios.get("http://localhost:3001/api/sales/list/").then((res) =>{this.setState({sales: res.data.sales})});
    this.noInfo()

    }
  }


  render(){ 
    if (this.props.type == "Ventas"){
      return ( 
        <table class="table table-hover " id ="Tabla-registro">
        <thead id="prueba">

            <tr class="table-hover " style={getStyleObjectFromString("background-color: #000; color:#F1E529 ;")}>
            
            <th scope="col">#</th>
            <th scope="col">Fecha</th>
            <th scope="col">Vendedor</th>  
            <th scope="col">#Id Material</th>
            <th scope="col">Material</th>                                        
            <th scope="col">Cedula Cliente </th>       
            <th scope="col">Precio Total</th>              
            <th> </th>
            </tr>
        </thead>
        <tbody>
          {
            this.state.sales.map((value, key)=>                
                <tr>
                  <td>
                    {key}
                  </td>
                   
                  <td>
                    {value.fecha}
                  </td>
                  <td>
                    {value.seller}
                  </td>
                  <td>
                    {value.id}
                  </td>
                  <td>
                    {value.nameMetal}
                  </td>
                  <td>
                    {value.idClient}
                  </td>
                  <td>
                    {value.totalCost}
                  </td>
                  <td>
                    <Botones info = {value} type = {this.props.type}  id={value.id}/> 
                  </td>
                </tr> 
            )


          }
        </tbody>
        </table>  
        )
    }
    }
}
export default Tabla;