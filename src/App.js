import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Auth 
import ProtectedRoute from './admin/ProtectedRoute';

//pages
import { Home } from './mainWebsite/Home';
import { About } from './mainWebsite/About';
import { Contact } from './mainWebsite/Contact';
import { NoMatch } from './mainWebsite/NoMatch';
import { AdminHome } from './admin/AdminHome';
import { Login } from './admin/Login';

//Setting the page
import { NavigationBar } from './components/NavigationBar';
import { Banner } from './components/Banner';


function display(props) {
  if (!props.isLoggedIn && !props.path.includes('/admin')) {
    return [
      <NavigationBar key="uniqueId1"/>,
      <Banner key="uniqueId2"/>
    ];
  }
}

class App extends Component {


  constructor() {
    super();
    this.state = {
      isLoggedIn: sessionStorage.getItem('isLoggedIn') === null ? false : true,
      path: window.location.pathname
    }
  }

  render() {
    return (
      <React.Fragment>


        <Router>
          <div>
            {display(this.state)}
          </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/admin/login" component={Login} />
              {
                //below is protected will redirected if not logged in
              }
              <ProtectedRoute path="/admin" component={AdminHome} />

              <Route component={NoMatch} />
            </Switch>
        </Router>

      </React.Fragment>
    );
  }
}

export default App;
