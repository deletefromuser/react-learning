
// https://vaadin.com/learn/tutorials/using-web-components-in-react
import '@polymer/paper-button/paper-button.js';
import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(
            `A name was submitted: ${this.input.current.value},\r\nSelected file - ${this.fileInput.current.files[0].name}`
        );
    }

    render() {
        return (
            <form className='d-flex flex-column' onSubmit={this.handleSubmit}>
                <label className='m-2'>
                    Name:
                    <input className='form-control d-inline w-25 ms-3' type="text" ref={this.input} />
                </label>
                <label className='m-2'>
                    Upload file:
                    <input className='form-control d-inline w-50 ms-3' type="file" ref={this.fileInput} />
                </label>
                <input className='m-2 align-self-start btn btn-primary' type="submit" value="Submit" />

                <div>
                    <paper-button class="pink">link</paper-button>
                    <paper-button raised class="indigo">raised</paper-button>
                    <paper-button toggles raised class="green">toggles</paper-button>
                    <paper-button disabled class="disabled">disabled</paper-button>
                </div>

            </form>
        );
    }
}

export { NameForm as WebComponent };