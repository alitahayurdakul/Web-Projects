import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Add from './Components/Add'
import HomePage from './Components/HomePage'
import NotFound from './Components/NotFound'
import Update from './Components/Update'
import Navbar from './Components/Navbar'
import './page.scss'

function App() {
  return (
    <Router>
    <div >
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/update" component={Update}/>
        <Route exact path="/add" component={Add}/>
        <Route component={NotFound}/>
      </Switch>
    </div>

    </Router>
  );
}

export default App;
