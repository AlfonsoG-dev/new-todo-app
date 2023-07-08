/* eslint-disable react/prop-types */
export default function SubTarea({ subtarea, eliminarSubTarea }) {
    const content = () => {
        if (subtarea.completada) {
            return (
                <>
                    <input
                        type="checkbox"
                        onChange={() => console.log()}
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
                    <input
                        type="checkbox"
                        onChange={() => console.log()}
                    />
                    {subtarea.descripcion}
                    <div className="tarea-options">
                        <button>Editar</button>
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