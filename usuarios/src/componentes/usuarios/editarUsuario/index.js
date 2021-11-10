import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';

export const EditarUsuario = _ =>{
    const [usuarios, setUsuarios] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:5000/usuarios/'+id).then((response)=>{
            setUsuarios(response.data);
        });
    }, [id]);

    const editar = (event) =>{
        event.preventDefault();
        const form = event.target;
        const data = {
            nombres: form.nombres.value,
            email: form.email.value,
            contrasena: form.contrasena.value,
        };

        axios.put('http://localhost:5000/usuarios/'+id, data).then((response)=>{
            window.location.replace('http://localhost:3000/usuarios');
        });
    }

    return (
        <div>
            <li><Link className="btn btn-secondary" to="/usuarios">Volver</Link></li>
            <ul>
                <table>
                    <tbody>
                        <tr key={usuarios.id}>
                            <td>|</td><td>{usuarios.id}{')'}</td>
                            <td>|</td><td>{usuarios.nombres}</td>
                            <td>|</td><td>{usuarios.email}</td><td>|</td>
                        </tr>
                    </tbody>
                </table>
            </ul>
            <form onSubmit={editar}>
                <input type="text" placeholder={usuarios.nombres} name="nombres"></input>
                <input type="email" placeholder={usuarios.email} name="email"></input>
                <input type="password" placeholder={usuarios.contrasena} name="contrasena"></input>
                <button type="submit">Editar</button>
            </form>
        </div>
    );
}