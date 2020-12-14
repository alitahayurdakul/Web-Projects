import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'

class Update extends Component {

    state = {
        Text: "",
        Check: null
    }

    componentDidMount = async () => {
        await Axios
            .get(`http://127.0.0.1:8000/api/backend/${this.props.list.id}/`)
            .then(response => this.setState({
                Text: response.data.Text,
                Check: response.data.Check
            })
            )
    }

    changeText = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClickCheck = () => {
        this.setState({
            Check: !this.state.Check
        })
    }

    onClickButton = async (e) => {
        e.preventDefault();
        await Axios
            .put(`http://127.0.0.1:8000/api/backend/${this.props.list.id}/`, this.state)

        this.props.history.push("/");
    }


    render() {
        return (
            <div className="update-container">
                <div>
                    <p >Text</p>
                    <textarea maxLength="100" name="Text" value={this.state.Text} onChange={this.changeText} />
                    <p >Checkable</p>
                    <input className="chech-input" type="checkbox" defaultChecked={this.state.Check}
                        onClick={this.onClickCheck} />
                    <input className="btn" type="Submit" value="Update" onClick={this.onClickButton} />
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.listReducer
    }
}
export default connect(mapStateToProps)(Update)