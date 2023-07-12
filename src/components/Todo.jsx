import { useState } from "react"
import SubTareaContainer from "./subtarea/SubTodoContainer"
import { AiFillPlusCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaTrashRestore } from "react-icons/fa"
export default function Todo({ tarea, onDeleteTarea, onChangeTarea, subTareas }) {
    const [editada, setEditada] = useState(false)
    const [completar, setCompletar] = useState(false)
    function handleEditarTarea() {
        setEditada(!editada)
    }
    let content;
    if (editada) {
        content = (
            <>
                <label htmlFor="">

                    <input
                        value={tarea.descripcion}
                        onChange={(e) => onChangeTarea({
                            ...tarea,
                            descripcion: e.target.value
                        })}
                    />
                </label>
                <div className="tarea-options">

                    <button onClick={handleEditarTarea}><AiFillPlusCircle /></button>
                </div>
            </>
        )
    } else if (!completar) {
        content = (
            <>
                <input
                    type="checkbox"
                    value={completar}
                    onClick={(e) => setCompletar(e.target.checked)}
                />
                {tarea.descripcion}
                <div className="tarea-options" >
                    <button onClick={() => setEditada(true)}><AiFillEdit /></button>
                    <button onClick={() => onDeleteTarea(tarea.id)}><AiFillDelete /></button>
                </div >
            </ >
        )
    } else {
        content = (
            <div>
                <div style={{ textDecoration: 'line-through', color: 'red' }}>
                    {tarea.descripcion}
                </div>
                <div className="tarea-options" >
                    <button onClick={() => onDeleteTarea(tarea.id)}><AiFillDelete /></button>
                    <button onClick={() => setCompletar(false)}><FaTrashRestore /></button>
                </div >
            </div >
        )
    }

    return (
        <li>
            <div className="tarea">
                {content}
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

