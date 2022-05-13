import React from 'react';

export const MyContext = React.createContext({ name: "jerry", enemy: "tom" })

export default class Display extends React.Component {
    // static contextType = MyContext;
    render() {
        return (
            <div className="mb-3">
                some text: {JSON.stringify(this.context)}
            </div>
        );
    }
}
Display.contextType = MyContext;