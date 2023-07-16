import { createContext, useContext, useReducer } from "react"
import { subTodoReducer } from "../reducer/subTodoReducer"
import datos_subtodo from "../store/db_subtodo"


const SubTodoContext = createContext(null)

const SubTodoDispatchContext = createContext(null)


export function SubTodoProvider({ children }) {
    const [subTareas, dispatch] = useReducer(subTodoReducer, datos_subtodo);


    return (
        <SubTodoContext.Provider value={subTareas}>
            <SubTodoDispatchContext.Provider value={dispatch}>
                {children}
            </SubTodoDispatchContext.Provider>
        </SubTodoContext.Provider>
    )
}


export function useSubTodo() {
    return useContext(SubTodoContext)
}

export function useSubTodoDispatch() {
    return useContext(SubTodoDispatchContext)
}