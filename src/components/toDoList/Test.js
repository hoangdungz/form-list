import React, { Component } from 'react';

class Test extends Component {
    
    render() {
        return (
            <div className="form-group">
            <form >
            <input type="text" className="form-control" name id aria-describedby="helpId" placeholder />
            <button type="reset" className="btn btn-info">ADD ME</button>
            </form>
            </div>
        );
    }
}

export default Test;