import { useState } from "react"

/* eslint-disable react/prop-types */
export default function SubTarea({ subtarea, eliminarSubTarea }) {
    const [completar, setCompletar] = useState(false)

    const content = () => {
        if (!completar) {
            return (
                <>
                    <input
                        type="checkbox"
                        value={completar}
                        onChange={() => setCompletar(!completar)}
                    />
                    {subtarea.descripcion}
                    <div className="tarea-options">
                        <button>Editar</button>
                        <button onClick={() => eliminarSubTarea(subtarea.id)}>Eliminar</button>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div style={{ textDecoration: 'line-through', color: 'black' }}>
                        <input
                            type="checkbox"
                            value={completar}
                            onChange={() => setCompletar(!completar)}
                        />
                        {subtarea.descripcion}
                    </div>
                    <div className="tarea-options">
                        <button onClick={() => eliminarSubTarea(subtarea.id)}>Eliminar</button>
                    </div>
                </>
            )
        }
    }
    return (
        <li>
            {content()}
        </li>
    )
}