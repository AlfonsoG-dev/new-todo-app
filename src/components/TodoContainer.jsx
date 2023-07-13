import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
export default function TodoContainer({ title }) {

    return (
        <div className="tarea-container">
            <h1>{title}</h1>
            <AddTodo
                onAddTarea={handleAddTarea}
            />
            <>
                <h1>Lista de tareas</h1>
                <TodoList
                    tareas={tareas}
                    onDeleteTarea={handleDeleteTarea}
                    onChangeTarea={handleChangeTarea}
                    listaSubTareas={tareas}
                />
            </>
        </div>
    )
}