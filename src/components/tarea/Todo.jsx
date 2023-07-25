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
                <label htmlFor="">*

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
                <div className="todo-options">

                    <button><AiFillPlusCircle /></button>
                </div>
            </form>
        )
    } else {
        content = (
            <>
                {tarea.descripcion}
                <div className="todo-options" >
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
                    <div className="todo">
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
                    <div className="todo-complete">
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

            <>
                <SubTareaContainer
                    tareaCompleta={tarea.completada}
                />
            </>

        </li >
    )

}

