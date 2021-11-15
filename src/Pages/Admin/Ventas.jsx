
import React from 'react';
import "../../components/style.css"
import Tabla from '../../components/Tabla';
import Busqueda from '../../components/Busqueda';
import Encabezado from '../../components/Encabezado';
import Registro from '../../components/Registro';
import Noinfo from '../../components/Noinfo';
import Actualizar from '../../components/Actualizar';

const sales = () => {
  return (
    <div class="Panel-principal">
      <Encabezado subtitle = {"Ventas"} element = {"nueva venta"}/>
      <Busqueda subtitle = {"Ventas"} />
      <Registro type = {"Ventas"}/>
      <Actualizar type = {"Ventas"}/>
      <div class="Panel-registro shadow rounded-top" style={{ display: "flexbox"}}  >
      <Tabla type = {"Ventas"}/>
      <Noinfo type = {"Ventas"}/>
      </div> 
    </div>
  )
}

export default sales;


