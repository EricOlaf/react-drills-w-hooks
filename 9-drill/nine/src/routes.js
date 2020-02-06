import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup'

export default (
        <Switch>
            <Route exact path='/'><Home/></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/signup'><Signup/></Route>
        </Switch>
    )