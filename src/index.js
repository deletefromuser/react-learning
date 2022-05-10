import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Game from './TutorialChess/Game';
import Bookkeeper from './Router/BookKeeper';
import Context from './TutorialOther/Context';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Game />
        <hr className="my-3" />
        <Context></Context>
        <hr className="my-3" />
        <Bookkeeper></Bookkeeper>
        <hr className="my-3" />
    </>);
