import React, { Component } from 'react';
import './InfoList.css';

class FormName extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            isEdit: false,
            indexItem: null,
        };
        this.initState = {
            lastName: '',
            firstName: ''
        };
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
    }

    //TODO add user name
    handleClick = () => {
        //console.log(this.state);
        const newList = [...this.state.list];
        newList.push({ firstName: this.state.firstName, lastName: this.state.lastName })
        this.setState({ list: newList });

        // reset input
        this.setState({ ...this.initState });
        //console.log(list);
        let arr = [...this.state.list];
        arr.map((value, key) => {
            if (key === this.state.indexItem) {
                
                value.firstName = this.state.firstName;
                value.lastName = this.state.lastName;
             
            }
            return value;
        })
    }

    handleEdit = (item, index) => {
        this.setState({
            firstName: item.firstName,
            lastName: item.lastName,
            isEdit: true,
            indexItem: index,
        })
        
    }

    handleDelete = (item) => {
        const array = [...this.state.list];
        var index = array.indexOf(item);

        if (index !== -1) {
            array.splice(index, 1);
            this.setState({ list: array });
        }
    }

    handleCancelEdit = () => {
        this.setState({
            firstName: '',
            lastName: '',
            isEdit: false,
            indexItem: null,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            value={this.state.firstName}
                            className="form-control" name="firstName" onChange={this.handleChange} aria-describedby="helpId" placeholder="First name: " />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            value={this.state.lastName}
                            className="form-control" name="lastName" onChange={this.handleChange} aria-describedby="helpId" placeholder="Last name: " />
                    </div>
                    <button
                        style={{ marginBottom: 10, marginRight: 10 }}
                        type="reset"
                        className="btn btn-info"
                        onClick={this.handleClick}>{this.state.isEdit ? 'UPDATE' : 'ADD'}
                    </button>
                    <button style={{ marginBottom: 10 }} type="reset" className="btn btn-info" onClick={this.handleCancelEdit}>
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
                                <tr style={{ backgroundColor: this.state.indexItem === index ? '#e6f7ff' : '#ffffff' }} key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>
                                        <button className="btn btn-info" style={{ marginRight: 10 }} onClick={() => this.handleEdit(item, index)}>EDIT</button>
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
