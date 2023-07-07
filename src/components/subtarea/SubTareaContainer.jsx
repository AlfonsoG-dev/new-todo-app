/* eslint-disable react/prop-types */
import SubTareaList from "./subTareaList";
import AddSubTarea from "./AddSubTarea";
export default function SubTareaContainer({ listaSubtareas }) {
    return (
        <>
            <AddSubTarea />
            <SubTareaList
                subTareaList={listaSubtareas}
            />
        </>
    )
}