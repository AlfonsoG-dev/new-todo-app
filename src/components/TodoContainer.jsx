/* eslint-disable react/prop-types */
import { useState } from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
export default function TodoContainer({ listaDatos }) {
    const [tareas, setTareas] = useState(listaDatos)
    function agregarTarea(nTarea) {
        setTareas([
            ...tareas,
            {
                id: nTarea.id,
                descripcion: nTarea.descripcion,
                completada: nTarea.completada
            }
        ])
    }
    function eliminarTarea(tareaId) {
        setTareas(tareas.filter((t) => t.id !== tareaId))
    }
    function modificarDescripcionTarea(nTarea) {
        setTareas(
            tareas.map((t) => {
                if (t.id === nTarea.id) {
                    return nTarea;
                } else {
                    return t;
                }
            })
        )
    }
    return (
        <div className="tarea-container">
            <h1>Agregar Tarea</h1>
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