import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event)  {
        this.setState({value: event.target.value});
    }
    handleSubmit(event)  {
        alert('name: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        return (
            <div className="form-group">
                <form >
                <input onChange={this.handleChange} type="text" className="form-control" name id aria-describedby="helpId" placeholder />
                <button onClick = {this.handleSubmit} type="reset" className="btn btn-info">ADD ME</button>
                </form>
            </div>
        );
    }
}

export default Test;