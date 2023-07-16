import SubTareaList from "./SubTodoList";
import AddSubTarea from "./AddSubTodo";
import { SubTodoProvider } from "../../services/SubTodoContext";
export default function SubTareaContainer({ tareaCompleta }) {

    return (
        <SubTodoProvider>
            <>
                <AddSubTarea
                />
                <SubTareaList
                    tareaCompleta={tareaCompleta}
                />
            </>
        </SubTodoProvider>
    )
}