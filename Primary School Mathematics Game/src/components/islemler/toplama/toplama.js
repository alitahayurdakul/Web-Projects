import React, { Component } from 'react'
import QuestionLabel from '../../operations/QuestionLabel';
import GameOver from '../../GameOver';
import { createRandomNumber } from '../../operations/RandomNumber';

class Toplama extends Component{
        constructor(props){
                super(props);
                this.state={
                        success: true,
                        score: 0,
                        randomNumber1: createRandomNumber(),
                        randomNumber2: createRandomNumber()
                };
                this.result = 0;
        }

        sum = (number1, number2, answer) => {
                 this.result = number1 + number2;
        
                if(this.result == answer){
                        this.setState({
                                success: true,
                                score: this.state.score + 1,
                                randomNumber1: createRandomNumber(),
                                randomNumber2: createRandomNumber()
                        });
                } else {
                        this.setState({success: false});
                }
        }
       
         render(){
               
                if(this.state.success){
                        return(
                                <div className="questionLabel">
                                        <div className='skor'>Skor: {this.state.score}</div>
                                        <QuestionLabel operator="+" randomNumber1={this.state.randomNumber1} randomNumber2={this.state.randomNumber2}
                                        operationResult={(number1, number2, answer) => this.sum(number1, number2, answer)}/>
                                </div>
                        );
                } else {
                        return(
                                <GameOver score={this.state.score} result={this.result}/>
                        );
                }
                
        }
}

export default Toplama;