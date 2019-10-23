import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import DashBoard from './Dashboard';


import Page from '../todo/Page';
class HomePage extends Component {
    render() {
        return (
            <Router>
                <div className="">
                    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                                <a className="nav-item nav-link" href="#">Features</a>
                                <a className="nav-item nav-link" href="#">Pricing</a>
                                <a className="nav-item nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                            </div>
                        </div>
                    </nav> */}
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/todo">To Do</Link>
                        </li>

                    </ul>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <DashBoard />
                    </Route>
                    <Route path="/todo">
                        <Page />
                    </Route>

                </Switch>
            </Router>
        );
    }
}

export default HomePage;