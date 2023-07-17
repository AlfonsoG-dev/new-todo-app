import { useBoard } from "../../services/BoardContext"
import TodoContainer from "../tarea/TodoContainer"

export default function BoardList() {
    const boards = useBoard()

    return (
        <>
            {boards.map((board) => (
                <div key={board.id}>
                    <TodoContainer
                        title={board.title}
                    />
                </div>
            ))}
        </>
    )
}