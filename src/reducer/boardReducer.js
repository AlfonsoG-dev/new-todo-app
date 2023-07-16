export function boardRecuder(boards = [], action = {}) {

    if (action.type === "agregar") {
        return [
            ...boards,
            {
                id: action.id,
                title: action.title

            }
        ]
    } else if (action.type === "editar") {
        return boards.map((board) => {
            if (board.id === action.id) {
                return action
            } else {
                return board
            }
        })
    } else if (action.type === "eliminar") {
        return boards.filter((board) => board.id !== action.id)
    } else {
        throw Error(`la accion ${action.type} no se encuentra`)
    }
}