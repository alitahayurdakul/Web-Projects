import React, { Component } from 'react';

class QuestionLabel extends Component{

    constructor(){
        super();
        this.state = {
            answer:""
        };
    }

    handleChange = (e) => {
        this.setState({answer: e.target.value})
    }

    handleButton = () => {
        this.props.operationResult(this.props.randomNumber1, this.props.randomNumber2, this.state.answer);
        this.setState({answer: ""});
    }

    render(){

        return(
            <div className=''  > 
                <div className='toplama-div'>
                    <div className='boxNum'>
                            <h2>{this.props.randomNumber1}</h2>
                    </div>
                    <div className='boxNum'>
                        <h2>{this.props.operator}</h2>
                    </div>
                    <div className='boxNum'>
                            <h2>{this.props.randomNumber2}</h2>
                    </div>
                    <div className='boxNum'>
                            <h2>=</h2>
                    </div>
                    <div className=''>
                         <input type='number' placeholder='Cevap' className='answerInput' 
                         value={this.state.answer} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button className='btn' onClick={this.handleButton}>
                            Cevapla
                        </button>
                    </div>
                </div>
            </div>
        );

    }
}
export default QuestionLabel;