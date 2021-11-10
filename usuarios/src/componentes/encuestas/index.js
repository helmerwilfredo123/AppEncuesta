import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link,} from 'react-router-dom';

export const ListarEncuestas = _ => {
    const [encuestas, setEncuestas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/encuestas').then((response)=>{
            setEncuestas(response.data);
        });

    }, [setEncuestas]);

    function idEncuesta(encuesta){
        return (
            window.location.replace("http://localhost:3000/encuestas/editar/"+ encuesta.id)
        );
    }

    function borrar(encuesta){
        var opcion=window.confirm("El elemento seleccionado se eliminará. ¿Desea continuar?");
        if (opcion){
            axios.delete('http://localhost:5000/encuestas/'+encuesta).then(response =>{
                window.location.reload()
            })
        }
    }

    return (
        <div>
            <li>Encuestas → |<Link className="btn btn-success" to="/encuestas/crear"> Crear |</Link></li>
            <ul>
                <table>
                    <thead> 
                        <tr>
                            <th>|</th><th>ID</th><th>|</th><th>Nombre</th><th>
                            |</th><th>Usuario</th><th>|</th><th>Descripcion</th><th>|</th>
                        </tr>
                    </thead>
                    <tbody>
                        {encuestas.map((encuesta, key) => (
                            <tr key={encuesta.id}>
                                <td>|</td>
                                <td>{encuesta.id}{')'}</td>
                                <td>|</td>
                                <td>{encuesta.nombre}</td>
                                <td>|</td>
                                <td>{encuesta.usuario_id}</td>
                                <td>|</td>
                                <td>{encuesta.descripcion}</td>
                                <td>|</td>
                                <td><button className="btn btn-outline-dark" onClick={()=>idEncuesta(encuesta)}>Editar</button></td>
                                <td><button className="btn btn-outline-dark" onClick={()=>borrar(encuesta.id)}>Eliminar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ul>
        </div>
    );
}