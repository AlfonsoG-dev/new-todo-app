import { useReducer } from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import { todoReducer } from "../reducer/todoReducer"
export default function TodoContainer({ listaDatos, title }) {
    const [tareas, dispatch] = useReducer(todoReducer, listaDatos)

    function handleAddTarea(nTarea) {
        dispatch({
            type: 'agregar',
            id: nTarea.id,
            descripcion: nTarea.descripcion,
            completada: nTarea.completada,
            subtarea: []
        })
    }

    function handleDeleteTarea(nTareaId) {
        dispatch({
            type: 'eliminar',
            id: nTareaId
        })
    }

    function handleChangeTarea(nTarea) {
        dispatch({
            type: 'editar',
            tarea: nTarea
        })
    }
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