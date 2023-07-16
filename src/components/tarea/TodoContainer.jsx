import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import { TodoProvider } from "../../services/TodoContext"
export default function TodoContainer({ title }) {

    return (
        <TodoProvider>
            <div className="tarea-container">

                <h1>{title}</h1>
                <AddTodo
                />
                <>
                    <TodoList
                    />
                </>
            </div>
        </TodoProvider>
    )
}