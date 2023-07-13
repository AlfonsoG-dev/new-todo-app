import { useReducer } from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import { todoReducer } from "../reducer/todoReducer"
import { TodoProvider } from "../services/TodoContext"
export default function TodoContainer({ title }) {

    return (
        <TodoProvider>
            <div className="tarea-container">

                <h1>{title}</h1>
                <AddTodo
                />
                <>
                    <h1>Lista de tareas</h1>
                    <TodoList
                    />
                </>
            </div>
        </TodoProvider>
    )
}