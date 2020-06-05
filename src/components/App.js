import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import FilmsPage from "./films/FilmsPage";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/about">
                            <div>
                                <AddTodo/>
                                <VisibleTodoList/>
                                <Footer/>
                            </div>
                        </Route>
                        <Route path="/films">
                            <FilmsPage {...this.props}/>
                        </Route>
                        <Route path="/">
                            <HomePage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
