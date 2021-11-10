import React from 'react';
import axios from 'axios';
import {Link,} from 'react-router-dom';

export const crearUsuario = _ => {
    const crearUsuario = (event) =>{
        event.preventDefault();
        const form = event.target;
        const data = {
            nombres: form.nombres.value,
            email: form.email.value,
            contrasena: form.contrasena.value,
        };

        axios.post('http://localhost:5000/usuarios', data).then((response)=>{
            window.history.back();
        });
    }

    return (
        <div>
            <li>
                <Link className="btn btn-secondary" to="/usuarios">Volver</Link>
            </li>
            <form onSubmit={crearUsuario}>
                <input type="text" placeholder="Nombres" name="nombres"></input>
                <input type="email" placeholder="Email" name="email"></input>
                <input type="password" placeholder="Contraseña" name="contrasena"></input>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}