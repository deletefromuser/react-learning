import { Link, Outlet } from "react-router-dom";

export default function Other() {
    return (
        <div>
            <h1>☺️!Other!</h1>
            <nav
                className="border border-2 p-2"
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(10em,1fr))",
                }}
            >
                <Link to="context">Context</Link>
                <Link to="forward-ref">Forward Ref</Link>
                <Link to="lifecycle">LifeCycle</Link>
                <Link to="react-lazy">React Lazy</Link>
                <Link to="temperture-calculater">Temperture Calculater</Link>
                <Link to="thinking-in-react">Thinking in React</Link>
                <Link to="error-boundary">Error Boundary</Link>
                <Link to="hoc">Higher-Order Components</Link>
                <Link to="portal">Portal</Link>
                <Link to="profiler">Profiler</Link>
                <Link to="ref">Ref</Link>
                <Link to="render-props">Render Props</Link>
                <Link to="uncontrolled">Uncontrolled Component</Link>
                <Link to="web-component">Web Component</Link>
                <Link to="use-hook">Use Hook</Link>
                <Link to="use-custom-hook">Use Custom Hook</Link>
                <Link to="use-reducer">Use Reducer Hook</Link>
                <Link to="use-memo">Use Memo Hook</Link>
                <Link to="use-callback">Use Callback Hook</Link>
                <Link to="/">{"<"}back</Link>
            </nav>
            <Outlet />
        </div>
    );
}

