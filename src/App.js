import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button,Table } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <div className="App-form">
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
      </div>
    </div>
  );
}

export default App;
