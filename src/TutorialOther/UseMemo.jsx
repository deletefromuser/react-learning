import React, { useMemo, useState } from "react";

// https://hackernoon.com/react-hooks-the-difference-between-usememo-and-usecallback-5no3t0x

const plusFive = (num) => {
    console.log("i was called!");
    return num + 5;
};

function App() {
    const [num, setNum] = useState(0);
    const [light, setLight] = useState(true);
    // const numPlusFive = plusFive(num);
    const numPlusFive = useMemo(() => plusFive(num), [num]);
    return (
        <div className={light ? "light" : "dark"}>
            <div>
                <h1>useMemo</h1>
                <h2>
                    Current number: {num}, Plus five: {numPlusFive}
                </h2>
                <div className="button-container">
                    <button
                        onClick={() => {
                            setNum(num + 1);
                        }}
                    >
                        Update Number{" "}
                    </button>
                    <button
                        onClick={() => {
                            setLight(!light);
                        }}
                    >
                        {" "}
                        Toggle the light{" "}
                    </button>
                </div>
            </div>
        </div>
    );
}

export { App as UseMemo }