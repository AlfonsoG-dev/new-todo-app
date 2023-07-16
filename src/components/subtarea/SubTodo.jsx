import { useState } from "react"
import { AiFillPlusCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useSubTodoDispatch } from "../../services/SubTodoContext";
export default function SubTarea({ subtarea, tareaCompleta }) {
    const [editada, setEditada] = useState(false)
    const dispatch = useSubTodoDispatch()
    function handleEditarSubTarea() {
        setEditada(!editada)
    }
    let content;
    if (editada) {
        content = (
            <form onSubmit={handleEditarSubTarea}>

                <textarea
                    rows={4}
                    cols={50}
                    value={subtarea.descripcion}
                    onChange={(e) => dispatch({
                        type: "editar",
                        subtarea: {
                            ...subtarea,
                            descripcion: e.target.value
                        }
                    })}
                />
                <div className="tarea-options">

                    <button><AiFillPlusCircle /></button>
                </div>
            </form>
        )
    } else {
        content = (
            <>
                {subtarea.descripcion}
                <div className="tarea-options">
                    <button onClick={() => setEditada(true)}><AiFillEdit /></button>
                    <button onClick={() => dispatch({
                        type: "eliminar",
                        id: subtarea.id
                    })}><AiFillDelete /></button>
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
                            onChange={(e) => dispatch({
                                type: "editar",
                                subtarea: {
                                    ...subtarea,
                                    completada: e.target.checked
                                }
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
                        onChange={(e) => dispatch({
                            type: "editar",
                            subtarea: {
                                ...subtarea,
                                completada: e.target.checked
                            }
                        })}
                    />
                    {content}
                </div>
            )}
        </li>
    )
}
