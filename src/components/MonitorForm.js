import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const MonitorForm = (props) => {

    const initialstateValues = {
        cedula: '',
        nombre: '',
        apellido: '',
        programa: '',
        semestre: '',
        celular: '',
        correo: ''
    };
    const [values, setValues] = useState(initialstateValues);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })


    }
    const handleSubmit = e => {
        e.preventDefault();



        
        props.addOrEdit(values);
        setValues({ ...initialstateValues })
    }
    const getMonitorById = async (id) => {
        const doc = await db.collection('monitores').doc(id).get();
        setValues({ ...doc.data() })
    }

    useEffect(() => {
        if (props.currentId === '') {
            setValues({ ...initialstateValues });
        } else {
            getMonitorById(props.currentId);

        }
    }, [props.currentId]);


    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group ">
                <div className="input-group-text bg-light">
                    <input type="text"
                        className="form-control"
                        placeholder="Cedula"
                        name="cedula"
                        onChange={handleInputChange}
                        value={values.cedula}
                    />
                </div>
            </div>
            <div className="form-group ">
                <div className="input-group-text bg-light">
                    <input type="text"
                        className="form-control"
                        placeholder="Nombre"
                        name="nombre"
                        onChange={handleInputChange}
                        value={values.nombre}
                    />
                </div>
            </div>
            <div className="form-group ">
                <div className="input-group-text bg-light">
                    <input type="text"
                        className="form-control"
                        placeholder="Apellido"
                        name="apellido"
                        onChange={handleInputChange}
                        value={values.apellido}
                    />
                </div>
            </div>
            <div className="form-group ">
                <div className="input-group-text bg-light">
                    <input type="text"
                        className="form-control"
                        placeholder="Programa académico"
                        name="programa"
                        onChange={handleInputChange}
                        value={values.programa}
                    />
                </div>
            </div>
            <div className="form-group ">
                <div className="input-group-text bg-light">
                    <input type="text"
                        className="form-control"
                        placeholder="Semestre"
                        name="semestre"
                        onChange={handleInputChange}
                        value={values.semestre}
                    />
                </div>
            </div>
            <div className="form-group ">
                <div className="input-group-text bg-light">
                    <input type="text"
                        className="form-control"
                        placeholder="Celular"
                        name="celular"
                        onChange={handleInputChange}
                        value={values.celular}
                    />
                </div>
            </div>
            <div className="form-group ">
                <div className="input-group-text bg-light">
                    <input type="text"
                        className="form-control"
                        placeholder="Correo"
                        name="correo"
                        onChange={handleInputChange}
                        value={values.correo}
                    />
                </div>
            </div>

            <button className="btn btn-primary btn-block">
               {props.currentId ==='' ? 'Guardar':'Actualizar'} </button>

        </form>
    )
}
export default MonitorForm;