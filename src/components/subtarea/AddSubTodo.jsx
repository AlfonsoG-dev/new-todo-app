import { useEffect, useState } from "react"
import { AiFillPlusCircle } from "react-icons/ai";

export default function AddSubTarea({ datos, onAddSubTarea }) {
    const [descripcion, setDescripcion] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(datos.length)
    }, [datos, setIndex])
    function handleOnSubmit(e) {
        e.preventDefault()
        if (descripcion != "") {
            const newTarea = {
                id: index,
                descripcion: descripcion,
                completada: false,
            }
            onAddSubTarea(newTarea)
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