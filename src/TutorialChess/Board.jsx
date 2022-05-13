import React from 'react';
import { Square } from "./Square";




export class Board extends React.Component {

    renderSquare(i) {
        return <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
    }

    render() {
        let rows = [];
        for (let i = 0; i < 9; i += 3) {
            rows.push(<div className="board-row" key={i}>
                {this.renderSquare(i)}
                {this.renderSquare(i + 1)}
                {this.renderSquare(i + 2)}
            </div>);
        }

        return (
            <div>
                {rows}
            </div>
        );
    }
}
