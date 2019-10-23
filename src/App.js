import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import InfoList from './components/info/InfoList';
import HomePage from './components/routing/HomePage';


const Home = lazy(() => import('./components/routing/Home'));
const About = lazy(() => import('./components/routing/About'));


class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        {/* <InfoList /> */}
{/* 
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </Suspense>
        </Router> */}
        
      </div>
    );
  }
}

export default App;
