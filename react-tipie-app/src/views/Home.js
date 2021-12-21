import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { logout } from '../firebase';
import MaterialTable from "material-table";
import { Button } from '@material-ui/core';

export const Home = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3100/employees").then(res => {
            setEmployees(res.data);
        })
    },[]);

    return (
        <div  style={{ marginTop: '4rem', marginBottom: '4rem'}}>
            {employees? 
            <MaterialTable
                columns={[
                    { title: 'Nombre', field: 'name' },
                    { title: 'Email', field: 'email' },
                    { title: 'Edad', field: 'age' },
                    { title: 'Sector', field: 'sector' } 
                ]}
                data={employees}
                title="Empleados"
                />:"Cargando..."}
            <Button variant="contained" color="primary" style={{ marginTop: '4rem', marginBottom: '4rem'}} onClick={logout}>Cerrar sesión</Button>


        </div>
        
    )
}
