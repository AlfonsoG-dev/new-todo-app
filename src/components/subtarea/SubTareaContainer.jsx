/* eslint-disable react/prop-types */
import SubTareaList from "./subTareaList";
import AddSubTarea from "./AddSubTarea";
import { useState } from "react";
export default function SubTareaContainer({ listaSubtareas }) {
    const [subTareas, setSubTareas] = useState(listaSubtareas)
    function agregarSubTarea(nSubTarea) {
        console.log("TODO: agregarSubTarea")
    }
    function eliminarSubTarea(subTareaId) {

    }
    return (
        <>
            <AddSubTarea
                datos={subTareas}
                addSubTarea={agregarSubTarea}
            />
            <SubTareaList
                subTareaList={subTareas}
            />
        </>
    )
}