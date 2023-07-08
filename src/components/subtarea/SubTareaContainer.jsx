/* eslint-disable react/prop-types */
import SubTareaList from "./subTareaList";
import AddSubTarea from "./AddSubTarea";
import { useState } from "react";
export default function SubTareaContainer({ listaSubtareas }) {
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
        setSubTareas(subTareas.filter((t) => t.id !== subTareaId))
    }
    return (
        <>
            <AddSubTarea
                datos={subTareas}
                addSubTarea={agregarSubTarea}
            />
            <SubTareaList
                eliminarSubTarea={eliminarSubTarea}
                subTareaList={subTareas}
            />
        </>
    )
}