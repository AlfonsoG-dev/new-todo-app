import { useState } from "react"
import { AiFillPlusCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaTrashRestore } from 'react-icons/fa'
export default function SubTarea({ subtarea, onDeleteSubTarea, onChangeSubTarea, tareaCompleta }) {
    const [editada, setEditada] = useState(false)
    const [completar, setCompletar] = useState(false)
    function handleEditarSubTarea() {
        setEditada(!editada)
    }
    let content;
    if (editada) {
        content = (
            <form onSubmit={handleEditarSubTarea}>

                <label htmlFor="">

                    <input
                        value={subtarea.descripcion}
                        onChange={(e) => onChangeSubTarea({
                            ...subtarea,
                            decripcion: e.target.value
                        })}
                    />
                </label>
                <div className="tarea-options">
                    <button><AiFillPlusCircle /></button>
                </div>
            </form >
        )
    } else if (!completar && tareaCompleta == false) {
        content = (
            <>
                <input
                    type="checkbox"
                    value={tareaCompleta}
                    onClick={(e) => setCompletar(e.target.checked)}
                />
                {subtarea.descripcion}
                <div className="tarea-options">
                    <button onClick={() => setEditada(true)}><AiFillEdit /></button>
                    <button onClick={() => onDeleteSubTarea(subtarea.id)}><AiFillDelete /></button>
                </div>
            </>
        )
    } else {
        content = (
            <div>
                <div style={{ textDecoration: 'line-through', color: 'black' }}>
                    {subtarea.descripcion}
                </div>
                <div className="tarea-options">
                    <button onClick={() => onDeleteSubTarea(subtarea.id)}><AiFillDelete /></button>
                    <button onClick={() => setCompletar(false)}><FaTrashRestore /></button>
                </div>
            </div >
        )
    }
    return (
        <li>
            <div className="subtarea">
                {content}
            </div>
        </li>
    )
}
