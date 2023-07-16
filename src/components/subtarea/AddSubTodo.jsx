import { useEffect, useState } from "react"
import { AiFillPlusCircle } from "react-icons/ai";
import { useSubTodoDispatch } from "../../services/SubTodoContext";
import datos_subtodo from "../../store/db_subtodo";

export default function AddSubTarea() {
    const [descripcion, setDescripcion] = useState('')
    const [index, setIndex] = useState(datos_subtodo.length)
    const dispatch = useSubTodoDispatch()

    function handleOnSubmit(e) {
        e.preventDefault()
        if (descripcion != "") {
            dispatch({
                type: "agregar",
                id: index,
                descripcion: descripcion,
                completada: false,
            })
            setDescripcion("")
            setIndex(index + 1)
        }
    }
    return (
        <div className="new-tarea">
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