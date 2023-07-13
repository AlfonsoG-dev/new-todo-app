import { createContext, useContext, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";
import datos from "../store/db";
export const TodoContext = createContext(null)
export const TodoDipachContext = createContext(null)

export function TodoProvider({ children }) {
    const [tareas, dispatch] = useReducer(todoReducer, datos)

    function handleAddTarea(nTarea) {
        dispatch({
            type: 'agregar',
            id: nTarea.id,
            descripcion: nTarea.descripcion,
            completada: nTarea.completada,
            subtarea: []
        })
    }

    function handleDeleteTarea(nTareaId) {
        dispatch({
            type: 'eliminar',
            id: nTareaId
        })
    }

    function handleChangeTarea(nTarea) {
        dispatch({
            type: 'editar',
            tarea: nTarea
        })
    }
    return (
        <TodoContext.Provider value={tareas}>
            <TodoDipachContext.Provider value={dispatch}>
                {children}
            </TodoDipachContext.Provider>
        </TodoContext.Provider>
    )
}