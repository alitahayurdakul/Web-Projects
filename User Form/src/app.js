import React, { Component } from 'react';
import Users from './components/Users';
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NotFound from './components/NotFound';
import NavBar from './components/Navbar';
import Contribute from './contribute/Contribute';

class App extends Component {
    render() {
        return (//Switch mantığı: bizim sayfalarımızın olduğu dışında bir path girilirse en sonda olanı seçer.Seçim yapar pathe göre.
            <Router>
                <div className="container">
                    <NavBar title="User App"/>
                    <Switch>
                    <Route exact path="/" component={Users}/>
                     <Route exact path="/add" component={AddUser}/>
                     <Route exact path="/github" component={Contribute}/>
                     <Route exact path="/edit/:id" component={UpdateUser}/>
                     <Route component={NotFound}/>
                    </Switch>
                </div>  
            </Router>
            
                
           
        )
    }
}

export default App;
