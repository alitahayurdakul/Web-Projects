import React, { Component } from 'react';
import {
    withRouter
} from 'react-router-dom';
import GetLotties from '../components/LottieComponent/GetLotties';
import wrongLottie from '../components/LottieJson/wrongAnswer.json'

class GameOver extends Component{

    constructor() {
        super();
        this.state = {}

    }

    render(){

        return(
            <div>
                <div>Skor: {this.props.score}</div>
                <div>Doğru Cevap: {this.props.result}</div>
                <button className='bt' onClick={() => this.props.history.push("/")}>
                        Tekrar Dene
                    </button>
                <div className="gameOverLottieStyle"> <GetLotties animationData={wrongLottie}/></div>
            </div>
        );
    }


} export default withRouter(GameOver);