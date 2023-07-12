import { useState } from "react"
import SubTareaContainer from "./subtarea/SubTodoContainer"
import { AiFillPlusCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaTrashRestore } from "react-icons/fa"
export default function Todo({ tarea, handleEliminarTarea, handleChangeTarea, subTareas }) {
    const [editada, setEditada] = useState(false)
    const [completar, setCompletar] = useState(false)
    function handleEditarTarea() {
        setEditada(!editada)
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
                    <div className="tarea-options">

                        <button onClick={handleEditarTarea}><AiFillPlusCircle /></button>
                    </div>
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
                        <button onClick={() => setEditada(true)}><AiFillEdit /></button>
                        <button onClick={() => handleEliminarTarea(tarea.id)}><AiFillDelete /></button>
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
                        <button onClick={() => handleEliminarTarea(tarea.id)}><AiFillDelete /></button>
                        <button onClick={() => setCompletar(false)}><FaTrashRestore /></button>
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
