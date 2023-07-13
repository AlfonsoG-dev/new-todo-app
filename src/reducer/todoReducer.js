import { enableMapSet } from "immer";
enableMapSet()
export function todoReducer(draft, action) {
    const index = draft.indexOf(action.id)
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
            draft.map(tarea => {
                if (tarea.id === action.tarea.id) {
                    draft[draft.indexOf(tarea)] = action.tarea
                } else {
                    draft[draft.indexOf(tarea)] = tarea
                }
            })
            break;
        case "eliminar":
            draft.splice(index, action.id)
            break;
        default:
            break;
    }

}