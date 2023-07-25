import { BoardProvider } from "../../services/BoardContext";
import BoardAdd from "./BoardAdd";
import BoardList from "./BoardList";

export default function TodoBoard() {
    return (
        <BoardProvider>
            <div className="todo-container">
                <BoardAdd />
                <BoardList />
            </div>
        </BoardProvider>

    )
}