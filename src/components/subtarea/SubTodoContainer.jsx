import SubTareaList from "./SubTodoList";
import AddSubTarea from "./AddSubTodo";
import { useReducer } from "react";
import { subTodoReducer } from "../../reducer/subTodoReducer";
export default function SubTareaContainer({ listaSubtareas, tareaCompleta }) {

    const [subTareas, dispatch] = useReducer(subTodoReducer, listaSubtareas)
    function handleAddSubTarea(nSubTarea) {
        dispatch({
            type: "agregar",
            id: nSubTarea.id,
            descripcion: nSubTarea.descripcion,
            completada: nSubTarea.completada
        })
    }

    function handleDeleteSubTarea(nSubTareaId) {
        dispatch({
            type: "eliminar",
            id: nSubTareaId
        })
    }

    function handleChangeSubTarea(nSubTarea) {
        dispatch({
            type: "editar",
            subtarea: nSubTarea
        })
    }
    return (
        <>
            <AddSubTarea
                datos={subTareas}
                onAddSubTarea={handleAddSubTarea}
            />
            <SubTareaList
                onDeleteSubTarea={handleDeleteSubTarea}
                onChangeSubTarea={handleChangeSubTarea}
                tareaCompleta={tareaCompleta}
                subTareaList={subTareas}
            />
        </>
    )
}