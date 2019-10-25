import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteToDo } from "./action";
class List extends Component {
  constructor() {
    super();
    // this.state = {
    //     childList: [],
    // }
  }
  // initState = {
  //     lastName: '',
  //     firstName: ''
  // };
  handleEdit = (item, index) => {
    let array = [...this.props.data];
    array[index].isEdit = true;
    array[index].indexItem = index;

    // this.setState({
    //     firstName: item.firstName,
    //     lastName: item.lastName,
    //     isEdit: true,
    //     indexItem: index,
    // })

    this.props.onEdit(array);
    console.log(array);
  };

  handleDelete = index => {
    let array = [...this.props.data];

    if (index !== -1) {
      array.splice(index, 1);
      //this.setState({ data: array });
    }
    this.props.onDelete(array);
  };

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
            {this.props.list.map((item, index) => {
              return (
                <tr style={{}} key={index}>
                  <td>{index + 1}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      style={{ marginRight: 10 }}
                      onClick={() => this.handleEdit(item, index)}
                    >
                      EDIT
                    </button>
                    <button
                      className="btn btn-info"
                      onClick={() => this.handleDelete(index)}
                    >
                      DELETE
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

const mapStateToProps = (state, ownProps) => {
  console.log(">>>> state", state);
  return {
    list: state.todo.list
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: () => {}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
