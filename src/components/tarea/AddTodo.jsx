import { useEffect, useState } from "react"
import datos from "../../store/db_todo"
import { AiFillPlusCircle } from "react-icons/ai";
import { useTodosDispatch } from "../../services/TodoContext";
// eslint-disable-next-line 
export default function AddTodo() {
    const [descripcion, setDescripcion] = useState('')
    const [index, setIndex] = useState(datos.length)
    const dispatch = useTodosDispatch()

    function handleOnSubmit(e) {
        e.preventDefault()
        if (descripcion != "") {
            dispatch({
                type: "agregar",
                id: index,
                descripcion: descripcion,
                completada: false,
                subtarea: []
            })
            setDescripcion("")
            setIndex(index + 1)
        }
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="descripcion">
                    <input
                        type="text"
                        name="descripcion"
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </label>
                <button><AiFillPlusCircle /></button>
            </form>
        </div>
    )
}