import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Profiler } from 'react';
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
import { ErrorBoundary } from './TutorialOther/ErrorBoundary';
import FancyDiv from './TutorialOther/ForwardRef';
import HOC from './TutorialOther/Hoc';
import Lifecycle from './TutorialOther/Lifecycle';
import { Calculator } from './TutorialOther/LiftStateUp';
import Other from './TutorialOther/Other';
import Portal from './TutorialOther/Portal';
import { onRenderCallback } from './TutorialOther/Profiler';
import { LazyUsingComponent } from './TutorialOther/Reactlazy';
import FilterableProductTable, { PRODUCTS } from './TutorialOther/ThinkingInReact';
import Ref from './TutorialOther/Ref';
import RenderProps from './TutorialOther/RenderProps';
import { Uncontrolled } from './TutorialOther/Uncontrolled';
import { WebComponent } from './TutorialOther/WebComponent';
import UseHook from './TutorialOther/UseHook';
import UseTodos from './TutorialOther/Todos';
import { Reducer } from './TutorialOther/Reducer';
import { UseMemo } from './TutorialOther/UseMemo';
import UseCallback from './TutorialOther/useCallback';

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
                    <Route path="thinking-in-react" element={<FilterableProductTable products={PRODUCTS} />} />
                    <Route path="error-boundary" element={<ErrorBoundary><FilterableProductTable /></ErrorBoundary>} />
                    <Route path="hoc" element={<HOC />} />
                    <Route path="portal" element={<Portal />} />
                    <Route path="profiler" element={<Profiler id="Panel" onRender={onRenderCallback}><HOC /></Profiler>} />
                    <Route path="ref" element={<Ref />} />
                    <Route path="render-props" element={<RenderProps />} />
                    <Route path="uncontrolled" element={<Uncontrolled />} />
                    <Route path="web-component" element={<WebComponent />} />
                    <Route path="use-hook" element={<UseHook />} />
                    <Route path="use-custom-hook" element={<UseTodos />} >
                        <Route path=":todoId" element={<Todo />} />
                    </Route>
                    <Route path="use-reducer" element={<Reducer initialCount={0} />} />
                    <Route path="use-memo" element={<UseMemo />} />
                    <Route path="use-callback" element={<UseCallback />} />

                </Route>

            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
