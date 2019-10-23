import React, { Component } from 'react';

class List extends Component {
    // initState = {
    //     lastName: '',
    //     firstName: ''
    // };
    handleEdit = (item, index) => {
        // this.setState({
        //     firstName: item.firstName,
        //     lastName: item.lastName,
        //     isEdit: true,
        //     indexItem: index,
        // })
    }

    handleDelete = (index) => {
        const array = [...this.state.list];

        if (index !== -1) {
            array.splice(index, 1);
            this.setState({ list: array });
        }
    }
    
    render() {
        return (
            <div>
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
                        {this.props.data.map((item, index) => {
                            return (
                                <tr style={{  }} key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>
                                        <button
                                            className="btn btn-info"
                                            style={{ marginRight: 10 }}
                                            onClick={() => this.handleEdit(item, index)}>EDIT
                                        </button>
                                        <button
                                            className="btn btn-info"
                                            onClick={() => this.handleDelete(index)}>DELETE
                                        </button>
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

export default List;