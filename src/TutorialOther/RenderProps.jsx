import React from 'react';

class Cat extends React.Component {
    componentDidMount() {
        this.timerID = setInterval(() => console.log(`The mouse position is ${this.props.mouse.x}, ${this.props.mouse.y}`), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const mouse = this.props.mouse;
        return (
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Adorable-animal-cat-20787.jpg" width="100px" alt="cat" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

                {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

// If you really want a HOC for some reason, you can easily
// create one using a regular component with a render prop!
function withMouse(Component) {
    return class extends React.Component {
        render() {
            return (
                <Mouse render={mouse => (
                    <Component {...this.props} mouse={mouse} />
                )} />
            );
        }
    }
}

class Location extends React.Component {
    render() {
        return (
            <div>
                <h1>Location</h1>
                <p>x: {this.props.mouse.x} y: {this.props.mouse.y}</p>
            </div>
        );
    }
}

const LocationWithMouse = withMouse(Location);

const LocationWithMouseFun = withMouse(props => (<p className='m-5'>The mouse position is {props.mouse.x}, {props.mouse.y}</p>)
);

export default class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                {/* <LocationWithMouse></LocationWithMouse> */}
                {/* <LocationWithMouseFun></LocationWithMouseFun> */}
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />
            </div>
        );
    }
}