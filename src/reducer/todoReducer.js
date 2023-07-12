export function todoReducer(tareas, action) {
    switch (action.type) {
        case 'agrear': {
            return ([
                ...tareas,
                {
                    id: action.id,
                    description: action.description,
                    completada: action.completada,
                    subtarea: action.subtarea
                }
            ])
        }
        case 'eliminar': {
            return tareas.filter((tarea) => tarea.id !== action.id)
        }
        case 'editar': {
            return tareas.map((tarea) => {
                if (tarea.id === action.tarea.id) {
                    return action.tarea;
                } else {
                    return tarea
                }
            })
        }
    }
}