import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react'
import HomePage from './Components/HomePage';
import SearchPage from './Components/SearchPage'

export default class App extends Component {

  state={
    initialvalue:""
  }
  onChangeinitial=(value)=>{
    this.setState({
      initialvalue:value
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={
              ()=><HomePage changeinitial={this.onChangeinitial}/>
            }/>

            <Route exact path="/search" component={
              ()=><SearchPage value={this.state.initialvalue}/>
            }/>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    )
  }
}

