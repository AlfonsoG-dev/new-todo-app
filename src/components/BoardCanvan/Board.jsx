import { BoardProvider } from "../../services/BoardContext";
import TodoContainer from "../tarea/TodoContainer";
import BoardAdd from "./BoardAdd";
import BoardList from "./BoardList";

export default function TodoBoard({ n_title = '' }) {
    return (
        <BoardProvider>
            <div className="container">
                <BoardAdd />
                <BoardList />
            </div>
        </BoardProvider>

    )
}