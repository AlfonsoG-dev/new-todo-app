/* eslint-disable react/prop-types */
import SubTareaList from "./subTareaList";
import AddSubTarea from "./AddSubTarea";
export default function SubTareaContainer({ listaSubtareas }) {
    function agregarSubTarea(nSubTarea) {
        console.log("TODO: agregarSubTarea")
    }
    return (
        <>
            <AddSubTarea
                datos={listaSubtareas}
                addSubTarea={agregarSubTarea}
            />
            <SubTareaList
                subTareaList={listaSubtareas}
            />
        </>
    )
}