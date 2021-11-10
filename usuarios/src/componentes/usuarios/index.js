import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link,} from 'react-router-dom';
import constantes from '../../constantes';
export const ListarUsuarios = _ => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get(constantes.url_servidor+'/usuarios').then((response)=>{
            setUsuarios(response.data);
        });
    }, [setUsuarios]);

    function idUser(usuario){
        return (
            window.location.replace("http://localhost:3000/usuarios/editar/"+ usuario.id)
        );
    }

    function borrar(usuario){
        var opcion=window.confirm("El elemento seleccionado se eliminará. ¿Desea continuar?");
        if (opcion){
            axios.delete('http://localhost:5000/usuarios/'+usuario).then(response =>{
                window.location.reload()
            })
        }
    }

    return (
        <div>
            <li>Usuarios → |<Link className="btn btn-success" to="/usuarios/crear"> Crear </Link></li>

         
            <ul>
                <table className="table-info">
                    <thead>
                        <tr><th>|</th><th>ID</th><th>|</th><th>Nombres</th><th>|</th><th>Email</th><th>|</th></tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario, key) => (
                            <tr key={usuario.id}>
                                <td>|</td>
                                <td>{usuario.id}{')'}</td>
                                <td>|</td>
                                <td>{usuario.nombres}</td>
                                <td>|</td>
                                <td>{usuario.email}</td>
                                <td>|</td>
                                <td><button className="btn btn-outline-dark" onClick={()=>idUser(usuario)}>Editar</button></td>
                                <td><button className="btn btn-outline-dark" onClick={()=>borrar(usuario.id)}>Eliminar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
</ul>
         
        </div>

        
    );

}