import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUsComp from './AboutUsComp';
import ErrorComp from './ErrorComp';
import HomeComp from './HomeComp';
import PropertiesComp from './PropertiesComp';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomeComp}/>
                    <Route exact path="/propiedades" component={PropertiesComp}/>
                    <Route exact path="/" component={HomeComp}/>
                    <Route exact path="/" component={HomeComp}/>
                    <Route exact path="/aboutus" component={AboutUsComp}/>
                    <Route component={ErrorComp}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router
