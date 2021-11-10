import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link,} from 'react-router-dom';

export const ListarSecciones = _ => {
    const [secciones, setSecciones] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/secciones').then((response)=>{
            setSecciones(response.data);
        });
    }, [setSecciones]);

    function idSeccion(seccion){
        return (
            window.location.replace("http://localhost:3000/secciones/editar/"+ seccion.id)
        );
    }

    function borrar(seccion){
        var opcion=window.confirm("El elemento seleccionado se eliminará. ¿Desea continuar?");
        if (opcion){
            axios.delete('http://localhost:5000/secciones/'+seccion).then(response =>{
                window.location.reload()
            })
        }
    }

    return (
        <div>
            <li>Secciones → |<Link className="btn btn-success" to="/secciones/crear"> Crear |</Link></li>
            <ul>
                <table>
                    <thead>
                        <tr>
                            <th>|</th><th>ID</th><th>|</th><th>Nombre</th><th>|</th><th>ID Encuesta</th><th>|</th></tr>
                    </thead>
                    <tbody>
                        {secciones.map((seccion, key) => (
                            <tr key={seccion.id}>
                                <td>|</td>
                                <td>{seccion.id}{')'}</td>
                                <td>|</td>
                                <td>{seccion.nombre}</td>
                                <td>|</td>
                                <td>{seccion.encuesta_id}</td>
                                <td>|</td>
                                <td><button className="btn btn-outline-dark" onClick={()=>idSeccion(seccion)}>Editar</button></td>
                                <td><button className="btn btn-outline-dark" onClick={()=>borrar(seccion.id)}>Eliminar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ul>
        </div>
    );
}