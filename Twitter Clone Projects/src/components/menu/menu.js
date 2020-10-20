import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions';
import './menu.css'

class Menu extends Component {

  render() {
    const { isLoggedIn } = this.props.auth;
    return isLoggedIn === true ? (
      <div className='ui secondary  menu'>
        <Link className='item' to='/'> <b>Tweetler</b> </Link>
        <Link className='item' to='/myTweets'> <b>Benim Tweetlerim</b> </Link>
        <Link className='item' to='/newTweet'> <b>Yeni Tweet</b> </Link>
        <div className='right menu'>
          <Link className='item' to='/' onClick={() => {
            this.props.logout();
          }}> <b>Çıkış yap</b>  </Link>
        </div>
      </div>
    ) : (
      <div>

      <div > 
      <h1>   Anasayfa</h1>
      </div>
      
        
      <div className='ui secondary  menu'>
        <Link className='item' to='/'> <h2>Tweetler</h2> </Link>
        <div className='right menu'>
          <Link className='item' to='/login'> <h2>Giriş yap</h2>  </Link>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logout })(Menu);