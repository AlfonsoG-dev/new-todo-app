import { useState } from "react"
import { AiFillPlusCircle, AiFillDelete, AiFillEdit, AiFillCloseSquare } from "react-icons/ai";

export default function SubTarea({ subtarea, eliminarSubTarea, handleChange, tareaCompleta }) {
    const [editada, setEditada] = useState(false)
    const [completar, setCompletar] = useState(false)
    function handleEditarSubTarea() {
        let opciones = confirm("Seguro desea editar la subtarea?")
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
                        defaultValue={subtarea.descripcion}
                        onChange={(e) => handleChange({
                            ...subtarea,
                            decripcion: e.target.value
                        })}
                    />
                    <button onClick={handleEditarSubTarea}><AiFillPlusCircle /></button>
                </>
            )
        } else if (!completar && tareaCompleta == false) {
            return (
                <>
                    <input
                        type="checkbox"
                        value={tareaCompleta}
                        onClick={(e) => setCompletar(!completar)}
                    />
                    {subtarea.descripcion}
                    <div className="tarea-options">
                        <button onClick={() => setEditada(true)}><AiFillEdit /></button>
                        <button onClick={() => eliminarSubTarea(subtarea.id)}><AiFillDelete /></button>
                    </div>
                </>
            )
        } else {
            return (
                <div>
                    <div style={{ textDecoration: 'line-through', color: 'black' }}>
                        {subtarea.descripcion}
                    </div>
                    <div className="tarea-options">
                        <button onClick={() => eliminarSubTarea(subtarea.id)}><AiFillDelete /></button>
                        <button onClick={() => setCompletar(false)}>Restaurar</button>
                    </div>
                </div >
            )
        }
    }
    return (
        <li>
            <div>
                {content()}
            </div>
        </li>
    )
}