import { useSubTodo } from "../../services/SubTodoContext";
import SubTarea from "./SubTodo";

export default function SubTareaList({ tareaCompleta }) {
    const subTareaList = useSubTodo()

    let content;

    if (subTareaList) {
        content = (
            subTareaList.map(element => (
                <SubTarea
                    subtarea={element}
                    tareaCompleta={tareaCompleta}
                    key={element.id}
                />
            ))

        )
    }

    return (
        <ul>
            {content}
        </ul>
    )
}