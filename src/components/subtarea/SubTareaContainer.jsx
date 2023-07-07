/* eslint-disable react/prop-types */
import SubTareaList from "./subTareaList";

export default function SubTareaContainer({ listaSubtareas }) {
    return (
        <>
            <SubTareaList
                subTareaList={listaSubtareas}
            />
        </>
    )
}