import { Link, Outlet } from "react-router-dom";
import { useTodos } from "./useTodos";

export default function Todos() {
    const [todos] = useTodos();

    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                {todos.length === 0 && <p>Loading...</p>}
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


