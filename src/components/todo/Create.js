import React, { Component } from "react";
import { connect } from "react-redux";
import { addToDo } from "./action";

class Create extends Component {
  state = {
    firstName: "",
    lastName: "",
    isEdit: false,
    indexItem: null
  };
  initState = {
    lastName: "",
    firstName: ""
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  handleCancelEdit = () => {
    this.setState({
      firstName: "",
      lastName: "",
      isEdit: false,
      indexItem: null
    });
  };

  handleClick = () => {
    //
    this.props.onCreate(this.state);
    // reset input
    this.setState({ ...this.initState });

    if (this.state.isEdit) {
      let arr = [this.state];
      arr.map((value, key) => {
        if (key === this.state.indexItem) {
          value.firstName = this.state.firstName;
          value.lastName = this.state.lastName;
        }
      });
    }

    // if (this.state.isEdit === false) {
    // // const newList = [...this.state.list];
    // // newList.push({ firstName: this.state.firstName, lastName: this.state.lastName })
    // this.setState({
    //     firstName: this.state.firstName,
    //     lastName: this.state.lastName,
    //  });

    //  this.props.onSucess(this.state);
    // console.log('state: ' + this.state);
    //  console.log(this.state.firstName + ' ' + this.state.lastName);

    // // reset input
    // this.setState({ ...this.initState });
    // }
    // else {
    //     let arr = [...this.state.list];
    //     arr.map((value, key) => {
    //         if (key === this.state.indexItem) {
    //             value.firstName = this.state.firstName;
    //             value.lastName = this.state.lastName;
    //         }
    //         console.log(value);
    //         return value;
    //     })
    //     this.setState({
    //         isEdit: false,
    //         list: arr
    //     });
    // }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleChange}
              aria-describedby="helpId"
              placeholder="First name: "
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleChange}
              aria-describedby="helpId"
              placeholder="Last name: "
            />
          </div>
          <button
            className="btn btn-info"
            style={{ marginBottom: 10, marginRight: 10 }}
            type="reset"
            onClick={this.handleClick}
          >
            {this.state.isEdit ? "UPDATE" : "ADD"}
          </button>
          <button
            className="btn btn-info"
            style={{ marginBottom: 10 }}
            type="reset"
            onClick={this.handleCancelEdit}
          >
            CANCEL
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    //   active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreate: input => {
      dispatch(addToDo(input));
      console.log("input on create: ", input);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
