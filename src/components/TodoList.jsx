import { useTodos } from "../services/TodoContext"
import Todo from "./Todo"
export default function TodoList() {
    const tareas = useTodos()
    return (
        <ul className="tareas">
            {tareas.map(tarea => (
                <Todo
                    tarea={tarea}
                    subTareas={tarea.subtarea}
                    key={tarea.id}
                />
            ))}
        </ul>
    )
}