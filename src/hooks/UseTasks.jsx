import { useContext } from "react";
import { TodoContext } from "../services/TodoContext";

export function useTasks() {
    return useContext(TodoContext)
}