import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Delete from '../images/delete.png'
import { connect } from 'react-redux'
import { getValue } from '../redux/actions/counterActions'
import { getid } from '../redux/actions/counterActions'
import Axios from 'axios'
import { bindActionCreators } from 'redux'

class List extends Component {
    state = {
        list: []
    }

    componentDidMount = async () => {
        await
            Axios
                .get("http://127.0.0.1:8000/api/backend/")
                .then(response => this.setState({
                    list: response.data
                })
                )
        this.props.dispatch(getValue(this.state.list))
    }


    onClick = async(id) => {
        console.log("delete")
        await
     Axios
     .delete(`http://127.0.0.1:8000/api/backend/${id}/`)   
       this.setState({
           list: this.state.list.filter(listid => listid.id !== id)
       }) 
    }

    onClickUpdate = (id) =>{
        this.props.dispatch(getid(id))
    }

    render() {
        return (
            <div>
                {
                    this.state.list.map(l => {
                        return (
                            <div className="list-container" key={l.id}>
                                <Link className="link" to="/update" >
                                    <p  onClick={this.onClickUpdate.bind(this, l.id)}>
                                        {l.Text}</p>
                                </Link>
                                <input type="checkbox"
                                    defaultChecked={l.Check} disabled />

                                <img src={Delete} alt="delete" style={{  }} onClick={this.onClick.bind(this,l.id)} />
                            </div>
                        )
                    })
                }
                <Link to="/add" >
                <button className="btn">One More Adding</button>
                </Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { actions: bindActionCreators(getValue,getid, dispatch),
    }
}


export default connect(mapDispatchToProps)(List)


