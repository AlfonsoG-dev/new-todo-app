export function todoReducer(draft, action) {
    switch (action.type) {
        case "agregar":
            draft.push({
                id: action.id,
                descripcion: action.descripcion,
                completada: action.completada,
                subtarea: action.subtarea
            })
            break;
        case "editar":
            draft.forEach(tarea => {
                if (tarea.id === action.tarea.id) {
                    draft[tarea.id] = action.tarea
                } else {
                    draft[tarea.id] = tarea
                }
            });
            break;
        default:
            break;
    }

}