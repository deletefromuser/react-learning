import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getTodos } from "./data";

export default function Todos() {
    const [todos, setTodos] = useState([]);

    const fetchData = async () => {
        const data = await getTodos();
        setTodos(data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                {todos.length > 0 && todos.map((todo) => (
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`${todo.id}`}
                        key={todo.id}
                    >
                        {todo.title}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}


