import { useState } from "react"
import SubTareaContainer from "../subtarea/SubTodoContainer"
import { AiFillPlusCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useTodosDispatch } from "../../services/TodoContext";
export default function Todo({ tarea }) {

    const [editada, setEditada] = useState(false)

    const dispatch = useTodosDispatch()

    function handleEditarTarea() {
        setEditada(!editada)
    }

    let content;

    if (editada) {
        content = (
            <form onSubmit={handleEditarTarea} id="form-edicion">
                <label htmlFor="">

                    <textarea
                        form="form-edicion"
                        wrap="hard"
                        rows={4}
                        cols={50}
                        value={tarea.descripcion}
                        onChange={(e) => dispatch({
                            type: "editar",
                            tarea: {
                                ...tarea,
                                descripcion: e.target.value
                            }
                        })}
                    />
                </label>
                <div className="tarea-options">

                    <button><AiFillPlusCircle /></button>
                </div>
            </form>
        )
    } else {
        content = (
            <>
                {tarea.descripcion}
                <div className="tarea-options" >
                    <button onClick={() => setEditada(true)}><AiFillEdit /></button>
                    <button onClick={() => dispatch({
                        type: "eliminar",
                        id: tarea.id
                    })}><AiFillDelete /></button>
                </div >
            </>
        )
    }

    return (

        <li>
            {!tarea.completada ? (
                <>
                    <div className="tarea">
                        <input
                            type="checkbox"
                            value={tarea.completada}
                            onChange={(e) => dispatch({
                                type: "editar",
                                tarea: {
                                    ...tarea,
                                    completada: e.target.checked
                                }
                            })}
                        />
                        {content}
                    </div>
                </>
            ) : (
                <>
                    <div className="tarea-completada">
                        <input
                            type="checkbox"
                            value={tarea.completada}
                            onChange={(e) => dispatch({
                                type: "editar",
                                tarea: {
                                    ...tarea,
                                    completada: e.target.checked
                                }
                            })}
                        />
                        {content}
                    </div>
                </>
            )}

            <div>
                <SubTareaContainer
                    tareaCompleta={tarea.completada}
                />
            </div>

        </li >
    )

}

