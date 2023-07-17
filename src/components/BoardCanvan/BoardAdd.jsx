import { AiFillPlusCircle } from "react-icons/ai";
import { useBoardDispatch } from "../../services/BoardContext";
import { useState } from "react";
import datos_board from "../../store/db_board";

export default function BoardAdd() {
    const [index, setIndex] = useState(datos_board.length)
    const [title, setTitle] = useState('')
    const dispatch = useBoardDispatch()
    function handleOnSubmit(e) {
        e.preventDefault()
        dispatch({
            type: "agregar",
            id: index,
            title: title,
            tareas: []
        })
        setTitle('')
        setIndex(index + 1)
    }
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="">
                    <input
                        type="text"
                        value={title}
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <button><AiFillPlusCircle /></button>
            </form>
        </>
    )
}