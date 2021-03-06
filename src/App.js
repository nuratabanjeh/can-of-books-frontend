import React from 'react';
import Header from './header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './footer';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyFavoriteBooks from './myFavoriteBooks';
import Login from './Login';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';
class App extends React.Component {
  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the Profile is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                {isAuthenticated ? <MyFavoriteBooks /> : <Login />}
                {isAuthenticated?<LogoutButton/>:""}
              </Route>
              <Route exact path="/Profile">
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                {isAuthenticated?<Profile/>:<LogoutButton/>}
              </Route>
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);