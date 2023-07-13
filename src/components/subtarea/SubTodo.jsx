import { useState } from "react"
import { AiFillPlusCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";
export default function SubTarea({ subtarea, onDeleteSubTarea, onChangeSubTarea, tareaCompleta }) {
    const [editada, setEditada] = useState(false)
    function handleEditarSubTarea() {
        setEditada(!editada)
    }
    let content;
    if (editada) {
        content = (
            <form onSubmit={handleEditarSubTarea}>

                <input
                    value={subtarea.descripcion}
                    onChange={(e) => onChangeSubTarea({
                        ...subtarea,
                        descripcion: e.target.value
                    })}
                />
                <button><AiFillPlusCircle /></button>
            </form>
        )
    } else {
        content = (
            <>
                {subtarea.descripcion}
                <div className="tarea-options">
                    <button onClick={() => setEditada(true)}><AiFillEdit /></button>
                    <button onClick={() => onDeleteSubTarea(subtarea.id)}><AiFillDelete /></button>
                </div>
            </>
        )
    }
    return (
        <li>
            {!subtarea.completada && tareaCompleta == false ? (
                <>
                    <div className="subtarea">
                        <input
                            type="checkbox"
                            value={subtarea.completada}
                            onChange={(e) => onChangeSubTarea({
                                ...subtarea,
                                completada: e.target.checked
                            })}
                        />
                        {content}
                    </div>
                </>
            ) : (
                <div className="subtarea-completada">
                    <input
                        type="checkbox"
                        value={subtarea.completada}
                        onChange={(e) => onChangeSubTarea({
                            ...subtarea,
                            completada: e.target.checked
                        })}
                    />
                    {content}
                </div>
            )}
        </li>
    )
}
