import React, { useRef } from 'react';

export default () => {
    return <>
        <CustomTextInput></CustomTextInput>
        <AutoFocusTextInput></AutoFocusTextInput>
        <CustomTextInputFun></CustomTextInputFun>
    </>
};

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }

    render() {
        // tell React that we want to associate the <input> ref
        // with the `textInput` that we created in the constructor
        return (
            <div className="m-3">
                <input className="me-3"
                    type="text"
                    ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focusTextInput();
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput} />
        );
    }
}

function CustomTextInputFun(props) {
    // textInput must be declared here so the ref can refer to it
    const textInput = useRef(null);

    function handleClick() {
        textInput.current.focus();
    }

    return (
        <div className="m-3">
            <input className="me-3"
                type="text"
                ref={textInput} />
            <input
                type="button"
                value="Focus the text input"
                onClick={handleClick}
            />
        </div>
    );
}