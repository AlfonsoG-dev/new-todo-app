/* eslint-disable react/prop-types */
import { useState } from "react"
export default function AddSubTarea({ datos, addSubTarea }) {
    const [descripcion, setDescripcion] = useState('')
    const [index, setIndex] = useState(datos.length)
    function handleOnSubmit(e) {
        e.preventDefault()
        if (descripcion != "") {
            const newTarea = {
                id: index,
                descripcion: descripcion,
                completada: false,
                subtarea: []
            }
            addSubTarea(newTarea)
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
                <button>Add</button>
            </form>
        </div>
    )
}