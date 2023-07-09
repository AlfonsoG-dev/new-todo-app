import { useState } from "react"
import SubTareaContainer from "./subtarea/SubTodoContainer"
export default function Todo({ tarea, handleEliminarTarea, handleChangeTarea, subTareas }) {
    const [editada, setEditada] = useState(false)
    const [completar, setCompletar] = useState(false)
    function handleEditarTarea() {
        let opciones = confirm("Seguro desea editar la tarea?")
        if (opciones == true) {
            setEditada(!editada)
        } else {
            setEditada(!editada)
        }
    }

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
                    <button onClick={handleEditarTarea}>Guardar</button>
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
                        {tarea.descripcion}
                    </div>
                    <div className="tarea-options" >
                        <button onClick={() => handleEliminarTarea(tarea.id)}>Eliminar</button>
                        <button onClick={() => setCompletar(false)}>Restaurar</button>
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
                    tareaCompleta={completar}
                />
            </div>
        </li>
    )
}