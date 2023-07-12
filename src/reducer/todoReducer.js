export function todoReducer(tareas, action) {
    if (action.type === "agregar") {
        return [
            ...tareas,
            {
                id: action.id,
                descripcion: action.descripcion,
                completada: action.completada,
                subtarea: action.subtarea
            }
        ]
    } else if (action.type === "editar") {
        return tareas.map((tarea) => {
            if (tarea.ida === action.tarea.id) {
                return action.tarea
            } else {
                return tarea
            }
        })
    } else if (action.type === "eliminar") {
        return tareas.filter((tarea) => tarea.id !== action.id)
    } else {
        throw Error(`la action de tipo ${action.type} no es valia`)
    }
}