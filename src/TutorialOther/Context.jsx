import React from 'react';
import { Button } from 'react-bootstrap';
import Display, { MyContext } from '../TutorialChess/Display';

export default class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: { name: "jerry", enemy: "tom" },
        };
    }

    changeMsg() {
        this.setState({
            msg: { name: (Math.random() + 1).toString(36).substring(7), enemy: (Math.random() + 1).toString(36).substring(7) }
        });
    }

    render() {
        return (
            <MyContext.Provider value={this.state.msg}>
                <code><pre>
                    {`const MyContext = React.createContext({ name: "jerry", enemy: "tom" })
    ...
    class Game extends React.Component {
        ...
        changeMsg() {
            this.setState({
                msg: { name: (Math.random() + 1).toString(36).substring(7), enemy: (Math.random() + 1).toString(36).substring(7) }
            })
        }
        ...
    }`}
                </pre>
                </code>
                <Display></Display>
                <Button variant="primary" onClick={() => { this.changeMsg(); }}>Primary</Button>
                <MyContext.Consumer>
                    {value => <><br /><br />{JSON.stringify(value)}</>}
                </MyContext.Consumer>
            </MyContext.Provider>
        );
    }
}

