import { useState } from "react"
import SubTareaContainer from "./subtarea/SubTareaContainer"
/* eslint-disable react/prop-types */
export default function Todo({ tarea, handleEliminarTarea, handleChangeTarea, subTareas }) {
    const [editada, setEditada] = useState(false)
    const [completar, setCompletar] = useState(false)
    const content = () => {
        if (editada) {
            return (
                <>
                    <input
                        type="text"
                        defaultValue={tarea.descripcion}
                        onChange={(e) => handleChangeTarea({
                            ...tarea,
                            descripcion: e.target.value
                        })}
                    />
                    <button onClick={() => setEditada(false)}>Guardar</button>
                </>
            )
        } else if (!completar) {
            return (
                <>
                    <input
                        type="checkbox"
                        value={completar}
                        onClick={(e) => setCompletar(e.target.checked)}
                    />
                    {tarea.descripcion}
                    <div className="tarea-options" >
                        <button onClick={() => setEditada(true)}>Editar</button>
                        <button onClick={() => handleEliminarTarea(tarea.id)}>Eliminar</button>
                    </div >
                </ >
            )
        } else {
            return (
                <div>
                    <div style={{ textDecoration: 'line-through', color: 'red' }}>
                        <input type="checkbox" value={completar} onClick={() => setCompletar(!completar)} />
                        {tarea.descripcion}
                    </div>
                    <div className="tarea-options" >
                        <button onClick={() => handleEliminarTarea(tarea.id)}>Eliminar</button>
                    </div >
                </div >
            )
        }

    }

    return (
        <li>
            <div className="tarea">
                {content()}
            </div>
            <div>
                <SubTareaContainer
                    listaSubtareas={subTareas}
                />
            </div>
        </li>
    )
}