import Axios from 'axios'
import React, { Component } from 'react'

class Add extends Component {
    state={
        "Text": "",
        "Check": false
    }

    ChangeText = (e) =>{
        this.setState({
            Text:e.target.value
        })
    }

    onCLickCheck = () =>{
        this.setState({
            Check : !this.state.Check
        })
    }

    AddClick = async() => {

        if(this.state.Text===""){
            alert("Text cannot be empty. Please write something")
            return false
        }
        await
        Axios.post("http://127.0.0.1:8000/api/backend/",this.state)

        this.setState({
            Text:"",
            Check:false
        })
    }
    render() {
        return (
            <div className="add-container">
                <p >Text</p>
                <textarea  maxLength="100" onChange={this.ChangeText} value={this.state.Text} />
                <p >Checkable</p>
                <input className="chech-input" type="checkbox" defaultChecked={this.state.Check} onClick={this.onCLickCheck} />
                <input className="btn" type="Submit" value="Add" onClick={this.AddClick} />
            </div>
        )
    }
}
export default Add
