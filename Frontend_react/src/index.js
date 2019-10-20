import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Project from './Component/Project.jsx'
import Employee from './Component/Employee.jsx'
import Defect from './Component/Defect.jsx'
import Home from './Component/Index.jsx'
import Proedit from './Component/Proedit.jsx'
import Defectedit from './Component/Defect.jsx'
import Empedit from './Component/Employee.jsx'

ReactDOM.render( <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}/> 
        <Route path='/home' component={Home}/>
        <Route path='/emp' component={Employee}/>
        <Route path='/pro' component={Project}/>
        <Route path='/def' component={Defect}/>
        <Route path='/proupdate/:proId' component={Proedit}/>
        <Route path='/update/:proId' component={Defectedit}/>
        <Route path='/proupdate/:proId' component={Empedit}/>

    </Switch>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below.:userId https://bit.ly/CRA-PWA
serviceWorker.unregister();
