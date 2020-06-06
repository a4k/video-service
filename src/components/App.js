import React from 'react'
import Footer from './common/Footer'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./common/Header";
import FilmsPage from "./films/FilmsPage";
import TVPage from "./tv/TVPage";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/tv">
                            <TVPage {...this.props}/>
                        </Route>
                        <Route path="/films">
                            <FilmsPage {...this.props}/>
                        </Route>
                        <Route path="/">
                            <FilmsPage {...this.props}/>
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
