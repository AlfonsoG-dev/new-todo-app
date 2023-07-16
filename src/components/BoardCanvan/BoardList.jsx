import { useBoard } from "../../services/BoardContext"
import TodoContainer from "../tarea/TodoContainer"

export default function BoardList() {
    const boards = useBoard()

    return (
        <>
            {boards.map((board) => (
                <div>
                    <TodoContainer
                        title={board.title}
                        //todo: verificar porque no está tomando la key del board o cual será la key
                        key={board.id}
                    />
                </div>
            ))}
        </>
    )
}