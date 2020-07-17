import React, { useEffect, useState } from 'react'
import MonitorForm from "./MonitorForm";

import { db } from "../firebase"


const Monitor = () => {

    const [monitores, setmonitores] = useState([]);
    const [currentId, setCurrentId] = useState("");

    const addOrEdit = async (linkObject) => {
        if (currentId === '') {


            await db.collection('monitores').doc().set(linkObject);
        }else{
            db.collection('monitores').doc(currentId).update(linkObject);
        }
    };
    const onDeleteMonitor = async (id) => {
        if (window.confirm('Estas seguro que deseas eliminar este Monitor?')) {
            await db.collection('monitores').doc(id).delete();

        }


    };

    const getMonitores = async () => {
        db.collection('monitores').onSnapshot(

            (querySnapshot) => {
                const docs = [];
                querySnapshot.forEach(doc => {

                    docs.push({ ...doc.data(), id: doc.id })
                });
                setmonitores(docs);
            });

    };

    useEffect(() => {
        getMonitores();
    }, []);

    return (

        <div >
            <h1> Monitores</h1>
            <MonitorForm {...{ addOrEdit, currentId, monitores }} />
            <div className="col-md-12">
                {monitores.map(monitor => (

                    <div className="card mb-1">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h3>Cedula: {monitor.cedula}</h3>


                            </div>
                            <h5>Nombre: {monitor.nombre}</h5>
                            <h5>Apellido: {monitor.apellido}</h5>
                            <h5>Programa: {monitor.programa}</h5>
                            <h5>Semestre: {monitor.semestre}</h5>
                            <h5>Celular: {monitor.celular}</h5>
                            <h5>Monitor: {monitor.correo}</h5>
                            <button class="btn btn-danger" onClick={() => onDeleteMonitor(monitor.id)}>eliminar  </button>

                            <button class="btn btn-warning" onClick={() => setCurrentId(monitor.id)}>Editar</button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
};
export default Monitor;