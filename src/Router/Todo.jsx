import { useParams } from "react-router-dom";
import { useTodo } from "../TutorialOther/useTodos";

export default function Todo() {
    let params = useParams();

    const todo = useTodo(params.todoId);

    return <div>
        <h2 className="mt-3 ms-3">Todo: {params.todoId}</h2>
        <p className="m-3"><input type="checkbox" className="form-check-input me-2" checked={todo.completed} disabled></input> <span>{todo.title}</span></p>
    </div>;
}
