import React , { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Menu from './menu/menu';
import Tweets from './tweet/tweets.js';
import MyTweets from './tweet/myTweets';
import NewTweet from './tweet/newTweet/newTweet';
import Login from './login/login';
import firebase from 'firebase/app';
import history from '../history';
import { isLoggedIn } from '../actions';
import { connect } from 'react-redux';

class App extends Component {

  componentWillMount() {
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBjjEcP2XZVFL8eSAmgB2tpclCz5D8HOBE",
    authDomain: "twitterklon-react-20292.firebaseapp.com",
    databaseURL: "https://twitterklon-react-20292.firebaseio.com",
    projectId: "twitterklon-react-20292",
    storageBucket: "twitterklon-react-20292.appspot.com",
    messagingSenderId: "221151095635",
    appId: "1:221151095635:web:5d30babc6003ccec8e4fa6",
    measurementId: "G-8V9G9MV72V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    this.props.isLoggedIn();
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Menu />
          <Switch>
            <Route path='/' exact component={Tweets} />
            <Route path='/myTweets' exact component={MyTweets} />
            <Route path='/newTweet' exact component={NewTweet} />
            <Route path='/editTweet' exact component={NewTweet} />
            <Route path='/login' exact component={Login} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect(null, { isLoggedIn })(App);


