import { createContext, useContext, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";
import datos from "../store/db";
import { useImmerReducer } from "use-immer";

const TodoContext = createContext(null)

const TodoDispatchContext = createContext(null)

export function TodoProvider({ children }) {
    const [tareas, dispatch] = useImmerReducer(todoReducer, datos)

    return (
        <TodoContext.Provider value={tareas}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    )
}

export function useTodos() {
    return useContext(TodoContext)
}

export function useTodosDispatch() {
    return useContext(TodoDispatchContext)
}