import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/ProyectoContext';

const Proyectos = ({proyecto}) => {

    // Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);

    const { proyectoActual} = proyectosContext;
    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={()=> proyectoActual(proyecto.id) }
            >
                {proyecto.nombre}
            </button>
        </li>
     );
}
 
export default Proyectos;