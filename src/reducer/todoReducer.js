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
        default:
            break;
    }

}