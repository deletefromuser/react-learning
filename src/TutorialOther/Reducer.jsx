import { useReducer } from "react";

function init(initialCount) {
    return { count: initialCount };
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function Counter({ initialCount }) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <div className="m-3 d-flex align-items-center">
            <span className="m-3">Count: {state.count}</span>
            <button
                onClick={() => dispatch({ type: 'reset', payload: initialCount })} className="mx-2 btn btn-outline-warning">
                Reset
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })} className="mx-2 btn btn-danger">-</button>
            <button onClick={() => dispatch({ type: 'increment' })} className="mx-2 btn btn-primary">+</button>
        </div>
    );
}

export { Counter as Reducer };
