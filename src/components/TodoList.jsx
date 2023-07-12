import Todo from "./Todo"
export default function TodoList({ tareas, onDeleteTarea, onChangeTarea }) {
    console.log(tareas)
    return (
        <ul className="tareas">
            {tareas.map(tarea => (
                <Todo
                    tarea={tarea}
                    handleEliminarTarea={onDeleteTarea}
                    handleChangeTarea={onChangeTarea}
                    subTareas={tarea.subtarea}
                    key={tarea.id}
                />
            ))}
        </ul>
    )
}