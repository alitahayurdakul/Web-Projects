import React, { Component } from 'react'
import './menu.css'
import { Link } from 'react-router-dom';


class Menu extends Component{
    render(){
        return(
        <div className='firs-div'>
        
    <Link className='btnLink' to='/toplama'> Toplama (+) </Link> 
        <Link className='btnLink' to='/cikarma'> Çıkarma (-) </Link> 
       <Link className='btnLink' to='/carpma'> Çarpma (x) </Link>
       <Link className='btnLink' to='/bolme'> Bölme (/) </Link>
        </div>
        )
    }
}
export default Menu;