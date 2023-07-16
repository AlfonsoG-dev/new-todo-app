import { createContext, useContext, useReducer } from "react"
import { boardReducer } from "../reducer/boardReducer"
import datos_board from "../store/db_board"

const BoardContext = createContext(null)

const BoardDispatchContext = createContext(null)


export function BoardProvider({ children }) {
    const [boards, dispatch] = useReducer(boardReducer, datos_board);

    return (
        <BoardContext.Provider value={boards}>
            <BoardDispatchContext.Provider value={dispatch}>
                {children}
            </BoardDispatchContext.Provider>
        </BoardContext.Provider>
    )

}

export function useBoard() {
    return useContext(BoardContext)
}

export function useBoardDispatch() {
    return useContext(BoardDispatchContext)
}