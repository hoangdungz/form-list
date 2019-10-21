import React, {Component} from 'react';
import { Form, Button,Table } from 'react-bootstrap';
import './InfoList.css';


class FormName extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            }
        }
    
        handleChange = (evt) =>  {        
            this.setState({[evt.target.name]: evt.target.value});
            console.log('evt: ', evt.target.name, evt.target.value);
        }
    
        handleSubmit = (evt) => {
            alert('First name: ' + this.state.inputFirstName);
            evt.preventDefault();
        }

        handleClick = () => {
            console.log(this.state);
        }

    render() {
        return (
            <div>
                <form onSubmit={(evt)=> this.handleSubmit(evt)}>
                    <div className="form-group">
                        <input type="text" className="form-control" name="firstName" onChange={this.handleChange} aria-describedby="helpId" placeholder="First name: " />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="lastName" onChange={this.handleChange} aria-describedby="helpId" placeholder="Last name: " />
                    </div>
                    <button type="reset" className="btn btn-info" onClick={this.handleClick}>
                        ADD
                    </button>
                 </form>
          </div>
        );
    }
}

export default FormName;
