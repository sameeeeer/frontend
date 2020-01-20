import React, { Component } from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom'

//Components
import Home from './container/Home'
import Login from './container/Login'
import Signup from './container/Signup'
import Blog from './container/Blog'

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/Blog" component={Blog} />
                
            </Switch>
            </BrowserRouter>
        )

    }
}
export default Router;