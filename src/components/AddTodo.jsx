/* eslint-disable react/prop-types */
import { useState } from "react"
import datos from "../store/db"

export default function AddTodo({ addTarea }) {
    const [descripcion, setDescripcion] = useState('')
    const [index, setIndex] = useState(datos.length)
    function handleClickAdd() {
        const newTarea = {
            id: index,
            descripcion: descripcion,
            completada: false,
            subtarea: []
        }
        addTarea(newTarea)
        setDescripcion("")
        setIndex(index + 1)
    }
    return (
        <div className="new-tarea">
            <label htmlFor="descripcion">
                <input
                    type="text"
                    name="descripcion"
                    id="descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </label>
            <button onClick={handleClickAdd}>Add</button>
        </div>
    )
}