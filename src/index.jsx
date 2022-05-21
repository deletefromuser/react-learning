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
import FancyDiv from './TutorialOther/ForwardRef';
import Lifecycle from './TutorialOther/Lifecycle';
import { Calculator } from './TutorialOther/LiftStateUp';
import Other from './TutorialOther/Other';
import { LazyUsingComponent } from './TutorialOther/Reactlazy';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>
                    <Game />
                    {/* <hr className="my-3" />
                    <Context></Context>
                    <hr className="my-3" /> */}

                    <hr className="my-3" />

                    <Link to="/router">Bookkeeper - ReactRouter</Link>

                    <hr className="my-3" />

                    <Link to="/other">Tutorial Other</Link>
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

                <Route path="other" element={<Other />} >
                    <Route index element={
                        <main style={{ padding: "1rem" }}>
                            <p>Select an item</p>
                        </main>
                    } />
                    <Route path="context" element={<Context />} />
                    <Route path="forward-ref" element={<FancyDiv />} />
                    <Route path="lifecycle" element={<Lifecycle />} />
                    <Route path="react-lazy" element={<LazyUsingComponent />} />
                    <Route path="temperture-calculater" element={<Calculator />} />
                </Route>

            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
