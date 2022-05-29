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

function logProps(Component) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            const { forwardedRef, ...rest } = this.props;

            // Assign the custom prop "forwardedRef" as a ref
            return <Component ref={forwardedRef} {...rest} />;
        }
    }

    // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.
    return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef={ref} />;
    });
}

const FancyButtonWithLogProps = logProps(FancyButton);
class FancyDiv extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.refHoc = React.createRef();
        this.changeColor = this.changeColor.bind(this);
        this.changeColorHoc = this.changeColorHoc.bind(this);
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

    changeColorHoc() {
        let button = this.refHoc.current;
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
            {/* <button onClick={() => this.changeColor()}>change color 2</button> */}
            <button className='ms-4' onClick={this.changeColor}>change color 2</button>

            <hr></hr>
            <FancyButtonWithLogProps ref={this.refHoc}>change color hoc</FancyButtonWithLogProps>
            <button className='ms-4' onClick={this.changeColorHoc}>change color hoc</button>
        </div>)
    }
}
export default FancyDiv;