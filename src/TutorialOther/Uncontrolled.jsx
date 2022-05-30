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
            </form>
        );
    }
}

export { NameForm as Uncontrolled };