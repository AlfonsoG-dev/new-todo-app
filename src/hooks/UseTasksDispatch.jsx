import { useContext } from "react";
import { TodoDipachContext } from "../services/TodoContext";

export function useTasksDispatch() {
    return useContext(TodoDipachContext)
}