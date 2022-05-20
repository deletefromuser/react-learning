import { useParams } from "react-router-dom";

export default function Todo() {
    let params = useParams();
    return <h2 className="mt-3 ms-3">Todo: {params.todoId}</h2>;
}
