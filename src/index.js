import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function canculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const element of lines) {
        const [a, b, c] = element;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

class Board extends React.Component {

    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{ squares: Array(9).fill(null), }],
            current: {
            },
            index: 0,
        };
    }

    handleClick(i) {
        const current = this.state.history[this.state.index].squares.slice();
        if (canculateWinner(current) || current[i]) {
            return;
        }

        let count = current.filter(item => item != null).length;
        current[i] = count % 2 === 0 ? 'X' : 'O';

        const history = this.state.history.slice(0, this.state.index + 1).concat({ squares: current });

        this.setState({ history: history, current: { squares: current }, index: this.state.index + 1 });
    }

    jumpTo(index) {
        this.setState({ current: this.state.history[index], index: index });
    }

    render() {
        const current = this.state.history[this.state.index].squares.slice();

        let count = current.filter(item => item != null).length;
        let xIsNext = (count % 2 === 0);
        let status = 'Next player: ' + (xIsNext ? 'X' : 'O');
        if (canculateWinner(current)) {
            status = 'Winner is : ' + (xIsNext ? 'O' : 'X');
        }

        const ols = this.state.history.map((_item, index) => {
            return (<li key={index}>
                <button onClick={() => this.jumpTo(index)}>{index + 1}</button>
            </li>)
        })

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current} onClick={i => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{ols}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
