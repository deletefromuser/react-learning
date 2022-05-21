import { Link, Outlet } from "react-router-dom";

export default function Other() {
    return (
        <div>
            <h1>☺️!Other!</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="context">Context</Link> |{" "}
                <Link to="forward-ref">Forward Ref</Link> |{" "}
                <Link to="lifecycle">LifeCycle</Link> |{" "}
                <Link to="react-lazy">React Lazy</Link> |{" "}
                <Link to="temperture-calculater">Temperture Calculater</Link> |{" "}
                <Link to="/">{"<"}back</Link>
            </nav>
            <Outlet />
        </div>
    );
}

