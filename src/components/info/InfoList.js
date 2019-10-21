import React, { Component } from 'react';
import './InfoList.css';


class FormName extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],
            editButton: false
        }
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
        console.log('evt: ', evt.target.name, evt.target.value);
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
    }

    handleClick = () => {
        //console.log(this.state);

        const newList = [...this.state.list];
        newList.push({ firstName: this.state.firstName, lastName: this.state.lastName })
        this.setState({ list: newList })
        //console.log(list);
    }

    handleEdit = (item) => {

        //this.setState({editButton: !this.state.editButton});
        //console.log(this.state.editButton);
        console.log(item);
        
    }

    handleDelete = (item) => {
        const array = [...this.state.list];
        // console.log(array);
        // console.log(item);
        var index = array.indexOf(item);

        if(index !== -1) {
            array.splice(index, 1);
            this.setState({list: array});
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" name="firstName" onChange={this.handleChange} aria-describedby="helpId" placeholder="First name: " />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="lastName" onChange={this.handleChange} aria-describedby="helpId" placeholder="Last name: " />
                    </div>
                    <button style={{marginBottom: 10, marginRight: 10}} type="reset" className="btn btn-info" onClick={this.handleClick}>
                        ADD
                    </button>
                    <button style={{marginBottom: 10}} type="reset" className="btn btn-info">
                        CANCEL
                    </button>
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>            
                            {this.state.list.map((item, index) => {
                                return (
                                    <tr style={{backgroundColor: this.state.editButton ? '#e6f7ff' : '#ffffff' }} key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>
                                            <button className="btn btn-info" style={{marginRight: 10}} onClick={() => this.handleEdit(item)}>EDIT</button>
                                            <button className="btn btn-info" onClick={() => this.handleDelete(item)}>DELETE</button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FormName;
