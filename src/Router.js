import React, { Component } from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom'

//Components
import Home from './container/Home'
import Login from './container/Login'
import Signup from './container/Signup'
import Blog from './container/Blog'
import Newsfeed from './container/Newsfeed'
import Editprofile from './container/Editprofile'
import Mypost from './container/Mypost';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/Blog" component={Blog} />
                <Route exact path="/Newsfeed" component={Newsfeed} />
                <Route exact path="/Editprofile" component={Editprofile} />
                <Route exact path="/Mypost" component={Mypost} />
            </Switch>
            </BrowserRouter>
        )

    }
}
export default Router;