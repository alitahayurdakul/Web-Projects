import React, { Component } from 'react'
import './app.css';
import './css/Lottie.css';
import Menu from './menu/menu'
import { Router,Route, Switch } from 'react-router-dom';
import history from './history';
import { Link } from 'react-router-dom';
import Toplama from './islemler/toplama/toplama';
import Çıkartma from './islemler/cikarma/cikarma';
import Çarpma from './islemler/carpma/carpma';
import Bölme from './islemler/bolme/bolme';

import './css/design.css'


class App extends Component{
    render(){
        return(
            <div className='container'>
                <Router history={history}>
                <div className='first-div'>
                <h1 className='gameName' > HAYDİ İŞLEM YAPALIM!</h1>
                </div>
                </Router>
            
                <Router history={history}>
                   <div className='menu'>
                   <Menu/>
                   <div className='third-div'>
                   <Switch>
                   <Route path='/toplama' exact component={Toplama} />
                   <Route path='/cikarma' exact component={Çıkartma} />
                   <Route path='/carpma' exact component={Çarpma} />
                   <Route path='/bolme' exact component={Bölme} />
                   </Switch>
                   </div>
                   </div>
                </Router>
            </div>
        )
    }
}

export default App;