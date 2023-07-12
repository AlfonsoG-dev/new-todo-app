import { useEffect, useReducer, useState } from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import { todoReducer } from "../reducer/todoReducer"
export default function TodoContainer({ listaDatos, title }) {
    const [tareas, dispatch] = useReducer(todoReducer, listaDatos)

    function handleAgregarTarea(nTarea) {
        dispatch({
            type: 'agregar',
            id: nTarea.id,
            description: nTarea.description,
            completada: nTarea.completada,
            subtarea: nTarea.subtarea
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
                addTarea={agregarTarea}
            />
            <>
                <h1>Lista de tareas</h1>
                <TodoList
                    tareas={tareas}
                    handleEliminarTarea={eliminarTarea}
                    handleChangeTarea={modificarDescripcionTarea}
                    listaSubTareas={tareas}
                />
            </>
        </div>
    )
}