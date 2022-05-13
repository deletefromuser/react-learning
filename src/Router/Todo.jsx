import { useParams } from "react-router-dom";

export default function Todo() {
    let params = useParams();
    return <h2>Invoice: {params.todoId}</h2>;
}
