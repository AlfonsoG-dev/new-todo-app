export function subTodoReducer(subTareas, action) {
    if (action.type === "agregar") {
        return [
            ...subTareas,
            {
                id: action.id,
                descripcion: action.descripcion,
                completada: action.completada,
            }
        ]
    } else if (action.type === "editar") {
        return subTareas.map((subtarea) => {
            if (subtarea.id === action.subtarea.id) {
                return action.subtarea
            } else {
                return subtarea
            }
        })
    } else if (action.type === "eliminar") {
        return subTareas.filter((subtarea) => subtarea.id !== action.id)
    } else {
        throw Error(`la action de tipo ${action.type} no es valia`)
    }
}