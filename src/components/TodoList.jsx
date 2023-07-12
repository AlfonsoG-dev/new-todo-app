import Todo from "./Todo"
export default function TodoList({ tareas, handleEliminarTarea, handleChangeTarea }) {
    return (
        <ul className="tareas">
            {tareas.map(tarea => (
                <Todo
                    tarea={tarea}
                    handleEliminarTarea={handleEliminarTarea}
                    handleChangeTarea={handleChangeTarea}
                    subTareas={tarea.subtarea}
                    key={tarea.id}
                />
            ))}
        </ul>
    )
}