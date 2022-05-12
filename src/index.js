import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './index.css';
import Bookkeeper from './Router/BookKeeper';
import Expenses from './Router/Expenses';
import Invoice from './Router/Invoice';
import Invoices from "./Router/Invoices";
import Todo from './Router/Todo';
import Todos from './Router/Todos';
import Game from './TutorialChess/Game';
import Context from './TutorialOther/Context';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<>
                <Game />
                <hr className="my-3" />
                <Context></Context>
                <hr className="my-3" />

                <Link to="/router">Bookkeeper - ReactRouter</Link>
            </>} />
            <Route path="router" element={<Bookkeeper />} >
                <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />} >
                    <Route
                        index
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>Select an invoice</p>
                            </main>
                        }
                    />
                    <Route path=":invoiceId" element={<Invoice />} />
                </Route>
                <Route path="todos" element={<Todos />} >
                    <Route path=":todoId" element={<Todo />} />
                </Route>
                <Route path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>

        </Routes>
    </BrowserRouter>
);
