import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import { TodoProvider } from "../../services/TodoContext"
export default function TodoContainer({ title }) {

    return (
        <TodoProvider>
            <div className="todo">
                <h1>{title}</h1>
                <AddTodo
                />
                <div className="todo-content">
                    <TodoList
                    />
                </div>
            </div>
        </TodoProvider>
    )
}