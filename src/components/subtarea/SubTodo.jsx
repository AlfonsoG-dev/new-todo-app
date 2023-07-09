import { useState } from "react"

export default function SubTarea({ subtarea, eliminarSubTarea, handleChange, tareaCompleta }) {
    const [editada, setEditada] = useState(false)
    const [completar, setCompletar] = useState(false)
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
                    <button onClick={() => setEditada(false)}>Guardar</button>
                </>
            )
        } else if (!completar && tareaCompleta == false) {
            console.log(completar)
            return (
                <>
                    <input
                        type="checkbox"
                        value={tareaCompleta}
                        onClick={(e) => setCompletar(!completar)}
                    />
                    {subtarea.descripcion}
                    <div className="tarea-options">
                        <button onClick={() => setEditada(true)}>Editar</button>
                        <button onClick={() => eliminarSubTarea(subtarea.id)}>Eliminar</button>
                    </div>
                </>
            )
        } else {
            console.log(completar)
            return (
                <div>
                    <div style={{ textDecoration: 'line-through', color: 'black' }}>
                        {subtarea.descripcion}
                    </div>
                    <div className="tarea-options">
                        <button onClick={() => eliminarSubTarea(subtarea.id)}>Eliminar</button>
                        <button onClick={() => setCompletar(false)}>Restaurar</button>
                    </div>
                </div>
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