import React from 'react';

// function FancyButton(props) {
//     return (
//         <button className="FancyButton btn-primary">
//             {props.children}
//         </button>
//     );
// }

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="m-4 btn btn-primary">
        {props.children}
    </button>
));

class FancyDiv extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.changeColor = this.changeColor.bind(this);
    }   

    changeColor() {
        let button = this.ref.current;
        if (Math.floor((Math.random() * 100)) % 2 === 0) {
            button.classList.add("btn-primary");
            button.classList.remove("btn-warning");
        } else {
            button.classList.remove("btn-primary");
            button.classList.add("btn-warning");
        }

    }

    render() {
        return (<div>
            <FancyButton ref={this.ref} >change color</FancyButton>
            <hr></hr>
            {/* <button onClick={() => this.changeColor()}>change color 2</button> */}
            <button onClick={this.changeColor}>change color 2</button>
        </div>)
    }
}
export default FancyDiv;