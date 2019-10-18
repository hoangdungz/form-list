import React from 'react';
import { Form, Button,Table } from 'react-bootstrap';
import './ToDoList.css';


function ToDoList() {
    // constructor(props){
    //     super(props);
    //     this.state = {value: ''};
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    //   handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }
  return (
      <>
        <div className="Form-info">
            <Form>
                <Form.Group controlId="formBasicFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="firstname" />
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="lastname" />
                </Form.Group>

                <Button variant="primary" type="add">
                Add
                </Button>
            </Form>
        </div>

        <div className="Form-list">
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td></td>
                </tr>
            </tbody>
            </Table>
        </div>

    </>
  );
}

export default ToDoList;
