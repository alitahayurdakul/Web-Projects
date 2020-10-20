import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllTweets } from '../../actions';
import TweetsPartTweets from './tweetsparttweets';
import './tweets.css';

class Tweets extends Component {
  componentDidMount() {
    this.props.fetchAllTweets();
  }

  render() {
    return (
      <div className='tweets-container ui feed background'>
        {this.props.tweetList.map(tweet => (
          <TweetsPartTweets key={tweet.uid} tweet={tweet}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tweetList: state.tweetList
  }
}

export default connect(mapStateToProps, { fetchAllTweets })(Tweets);