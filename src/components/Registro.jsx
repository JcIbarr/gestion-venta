import React, { Component } from 'react'
import { getStyleObjectFromString } from "../utils/stringUtils";
import Axios from "axios";
import swal from 'sweetalert';

import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Registro extends Component {

    constructor(props) {
        super(props);
        if (this.props.type == "Ventas") {
            this.state = {
                id_add: "",
                nameMetal_add: "",
                Unitcost_add: 0,
                amount_add: 0,
                totalCost_add: 0,
                nameClient_add: "",
                idClient_add: "",
                correoClient_add: "",
                dirClient_add: "",
                seller_add: "",
            };
        }
    }
    agregar = () => {
        const date = new Date();
        try {
            if (this.props.type == "Ventas") {

                console.log(this.state.id_add)
                Axios.post("http://localhost:3001/api/Ventas/add/", {

                    id: this.state.id_add,
                    namefruit: this.state.nameMetal_add,
                    Unitcost: this.state.Unitcost_add,
                    amount: this.state.amount_add,
                    totalCost: this.state.totalCost_add,
                    nameClient: this.state.nameClient_add,
                    idClient: this.state.idClient_add,
                    correoClient: this.state.correoClient_add,
                    dirClient: this.state.dirClient_add,
                    seller: this.state.seller_add,
                    fecha: date.toLocaleDateString()
                })
                document.getElementById(`FormReg2${this.props.type}`).reset();
                swal("La venta se registró correctamente!", "success");
            }
            document.getElementById(`FormReg${this.props.type}`).reset();
            this.cerrar()

        } catch (error) {
            console.log("hubo un error:" + error)
            if (this.props.type == "Ventas") {
                document.getElementById(`FormReg2${this.props.type}`).reset();
                swal("Ops!", `Parece que hubo un error al intentar registrar la venta!`, "error")
            }
        }
    }

    cerrar = () => {
        const id = `panRegistrar${this.props.type}`
        console.log(id)
        document.getElementById(id).style.display = "none";
    }

    render() {
        if (this.props.type == "Ventas") {
            return (
                <div id={"panRegistrar" + this.props.type} className="panRegistrar" >
                    <div class="Formulario-registrar  shadow   Texto-encabezado rounded bg-white w-50" id={"reg-form" + this.props.type}>
                        <div>
                            <div>
                                <h3 style={getStyleObjectFromString("padding: 2%; padding-bottom: 4%; position: relative; text-align: center; justify-content: center")}>
                                    Registrar Venta
                                </h3>
                            </div>
                            <div style={getStyleObjectFromString("display: flex;  justify-content: space-around;")}>

                                <div class="px-2 " style={getStyleObjectFromString("position:relative;  justify-content: center;")}>

                                    <h4 style={getStyleObjectFromString("padding-bottom:4% ;")} >Información Venta:</h4>

                                    <div>
                                        <form class="row g-3 buscador" id={"FormReg" + this.props.type}>

                                            <div class="col-12 form-floating">
                                                <input type="text" class="form-control" id={"MetalReg" + this.props.type} name={"MetalReg" + this.props.type} placeholder="Identificación" onChange={
                                                    (e) => { this.setState({ id_add: e.target.value }); }
                                                } />
                                                <label for={"MetalReg" + this.props.type} >Id:</label>
                                            </div>


                                            <div class="col-md-12 form-floating">
                                                <label class="visually-hidden" for={"nameMetalreg" + this.props.type}>Nombre</label>
                                                <select class="form-select" id={"nameMetalreg" + this.props.type} name={"nameMetalreg" + this.props.type} onChange={
                                                    (e) => { this.setState({ nameMetal_add: e.target.value }); }
                                                }>
                                                    <option selected>Material</option>
                                                    <option value="Acero">Acero</option>
                                                    <option value="Acero-inoxidable">Acero inoxidable</option>
                                                    <option value="Aluminio">Aluminio</option>
                                                    <option value="Aluminio-3010">Aluminio 3010</option>
                                                    <option value="Aluminio-6060">Aluminio 6060</option>
                                                    <option value="Laton">Laton</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 form-floating">
                                                <input type="number" class="form-control" id={"UnidadesReg" + this.props.type} name={"UnidadesReg" + this.props.type} placeholder="Unidades" onChange={
                                                    (e) => {
                                                        const c = document.getElementById(`UnidadesReg${this.props.type}`).value;
                                                        const p = document.getElementById(`precioReg${this.props.type}`).value; console.log(p);
                                                        document.getElementById(`totalCostReg${this.props.type}`).value = p * c; this.setState({ amount_add: e.target.value });
                                                    }
                                                } />
                                                <label for={"UnidadesReg" + this.props.type} >Unidades</label>

                                            </div>
                                            <div class="col-md-6 form-floating">

                                                <input type="number" class="form-control" id={"precioReg" + this.props.type} name={"precioReg" + this.props.type} placeholder="Precio unidad" onChange={
                                                    (e) => {
                                                        this.setState({ Unitcost_add: e.target.value });
                                                        const c = document.getElementById(`UnidadesReg${this.props.type}`).value;
                                                        const p = document.getElementById(`precioReg${this.props.type}`).value; console.log(p);
                                                        document.getElementById(`totalCostReg${this.props.type}`).value = p * c;
                                                    }
                                                } />
                                                <label for={"precioReg" + this.props.type} >Precio unidad</label>

                                            </div>

                                            <div class=" form-floating">
                                                <input type="number" class="form-control" id={"totalCostReg" + this.props.type} name={"totalCostReg" + this.props.type} placeholder="Precio total" onChange={
                                                    (e) => { this.setState({ totalCost_add: e.target.value }); }
                                                } />

                                                <label for={"totalCostReg" + this.props.type} >Precio total</label>
                                            </div>

                                        </form>


                                    </div>

                                </div>

                                <div class="px-2" style={getStyleObjectFromString("position:relative;  justify-content: center;")}>
                                    <h4 style={getStyleObjectFromString("padding-bottom:4% ;")}>Información Cliente:</h4>
                                    <div>
                                        <form class="row g-3" id={"FormReg2" + this.props.type}>

                                            <div class="col-12 form-floating">
                                                <input type="text" class="form-control" id={"nameClientReg" + this.props.type} name={"nameClientReg" + this.props.type} placeholder="Nombre" onChange={
                                                    (e) => { this.setState({ nameClient_add: e.target.value }); }
                                                } />
                                                <label for={"nameClientReg" + this.props.type} >Nombre </label>
                                            </div>


                                            <div class="col-12 form-floating">
                                                <input type="text" class="form-control" id={"clientReg" + this.props.type} name={"clientReg" + this.props.type} placeholder="Identificación" onChange={
                                                    (e) => { this.setState({ idClient_add: e.target.value }); }
                                                } />
                                                <label for={"clientReg" + this.props.type} >Identificación</label>
                                            </div>

                                            <div class="col-12 form-floating">
                                                <input type="text" class="form-control" id={"correoReg" + this.props.type} name={"correoReg" + this.props.type} placeholder="Correo" onChange={
                                                    (e) => { this.setState({ correoClient_add: e.target.value }); }
                                                } />
                                                <label for={"correoReg" + this.props.type} >Correo</label>
                                            </div>

                                            <div class="col-12 form-floating">
                                                <input type="text" class="form-control" id={"dirReg" + this.props.type} name={"dirReg" + this.props.type} placeholder="Dirreccion" onChange={
                                                    (e) => { this.setState({ dirClient_add: e.target.value }); }
                                                } />
                                                <label for={"dirReg" + this.props.type}>Dirreccion</label>
                                            </div>



                                            <div class="col-md-12 form-floating">
                                                <label class="visually-hidden" for={"vendedorReg" + this.props.type}>Vendedor</label>
                                                <select class="form-select" id={"vendedorReg" + this.props.type} name={"vendedorReg" + this.props.type} onChange={
                                                    (e) => { this.setState({ seller_add: e.target.value }); }
                                                }>
                                                    <option selected>Seleccionar vendedor</option>
                                                    <option value="Vendedor 1">Vendedor 1</option>
                                                    <option value="Vendedor 2">Vendedor 2</option>
                                                    <option value="Vendedor 3">Vendedor 3</option>
                                                </select>
                                            </div>
                                            <div class="col-md-12 form-floating">
                                                <div style={getStyleObjectFromString("display: flex; align-self:baseline; flex-direction: colum;")}>
                                                    <div class="px-2 py-2" style={getStyleObjectFromString("width: 110px; position: relative ;left: 32%; justify-content: center;")}>
                                                        <button type="button" class="btn btn-outline-danger rounded-pill" id="CancelarregisBtn" onClick={this.cerrar}>
                                                            Cancelar
                                                        </button>
                                                    </div>
                                                    <div class="px-2 py-2" style={getStyleObjectFromString("width:  110px; position: relative ;left: 32%; justify-content: center;")}>
                                                        <button type="button" class="btn btn-outline-primary rounded-pill" id={"confirmarRegBtn" + this.props.type} onClick={this.agregar}>
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
export default Registro;