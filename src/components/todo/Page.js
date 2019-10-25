import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List";
import Create from "./Create";

class Page extends Component {
  state = {
    data: []
  };
  tem = [];

  onSucess = item => {
    this.tem.push(item);
    this.setState({ data: this.tem });
    //console.log('full data: ', this.state.data);
  };

  onDelete = item => {
    this.tem = [...item];
    this.setState({ data: this.tem });
  };

  onEdit = item => {
    this.tem = [...item];
    this.setState({ data: this.tem });
    console.log("data: ", this.state.data);
  };

  render() {
    return (
      <div>
        <Create onSucess={this.onSucess} />
        <List
          data={this.state.data}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
        />
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
    //   onClick: () => {
    //     dispatch(setVisibilityFilter(ownProps.filter))
    //   }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
