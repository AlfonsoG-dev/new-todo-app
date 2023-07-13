import { createContext, useContext, useReducer } from "react";
import { subTodoReducer } from "../reducer/subTodoReducer"
import datos from "../store/db"

export const SubTodoContext = createContext(null)

export const SubTodoDispatchContext = createContext(null)

const listaSubtareas = datos.filter(tarea => tarea.subtarea)
export function SubTodoProvider({ children }) {
    const [subtareas, dispatch] = useReducer(subTodoReducer, listaSubtareas)

    return (
        <SubTodoContext.Provider value={subtareas}>
            <SubTodoDispatchContext.Provider value={dispatch}>

                {children}

            </SubTodoDispatchContext.Provider>
        </SubTodoContext.Provider>
    )
}

export function useSubTodoContext() {
    return useContext(SubTodoContext)
}

export function useSubTodoDispatchContext() {
    return useContext(SubTodoDispatchContext)
}
