import SubTareaList from "./SubTodoList";
import AddSubTarea from "./AddSubTodo";
import { useState } from "react";
export default function SubTareaContainer({ listaSubtareas, tareaCompleta }) {
    const [subTareas, setSubTareas] = useState(listaSubtareas)
    function agregarSubTarea(nSubTarea) {
        setSubTareas([
            ...subTareas,
            {
                id: nSubTarea.id,
                descripcion: nSubTarea.descripcion,
                completada: nSubTarea.completada
            }
        ])
    }
    function eliminarSubTarea(subTareaId) {
        var opciones = confirm("Seguro desea eliminar la subtarea?")
        if (opciones == true) {
            setSubTareas(subTareas.filter((t) => t.id !== subTareaId))
        }
    }
    function handleSubTareaChange(nSubTarea) {
        setSubTareas(
            subTareas.map((t) => {
                if (t.id === nSubTarea.id) {
                    return nSubTarea;
                } else {
                    return t;
                }
            })
        )
    }
    return (
        <>
            <AddSubTarea
                datos={subTareas}
                addSubTarea={agregarSubTarea}
            />
            <SubTareaList
                eliminarSubTarea={eliminarSubTarea}
                handleChange={handleSubTareaChange}
                tareaCompleta={tareaCompleta}
                subTareaList={subTareas}
            />
        </>
    )
}