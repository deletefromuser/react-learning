import { useEffect, useState } from "react";
import { getTodos, getTodo } from "../Router/data";

export function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getTodos();
            setTodos(data);
        })();
    }, [])

    return [todos, setTodos];
}

export function useTodo(id) {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        (async () => {
            const data = await getTodo(id);
            setTodo(data);
        })();
    }, [id]);

    return todo;
}