import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form, Button,Table } from 'react-bootstrap';

import InfoList from './components/info/InfoList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <InfoList />     
      </div>
    );
  }
}

export default App;
