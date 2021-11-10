import React from 'react';
import axios from 'axios';
import {Link,} from 'react-router-dom';

export const crearSeccion = _ => {
    const crear = (event) =>{
        event.preventDefault();
        const form = event.target;
        const data = {
            nombre: form.nombre.value,
            encuesta_id: form.encuesta_id.value,
        };

        axios.post('http://localhost:5000/secciones', data).then((response)=>{
            window.history.back();
        });
    }

    return (
        <div>
            <li><Link className="btn btn-secondary" to="/secciones">Volver</Link></li>
            <form onSubmit={crear}>
                <input type="text" placeholder="Nombre" name="nombre"></input>
                <input type="number" placeholder="ID Encuesta" name="encuesta_id"></input>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}