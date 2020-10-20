import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import UserConsumer from '../context/context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class User extends Component {
    state = {
        isVisible : false
    }
    static defaultProps = {
        name : "Bilgi Yok",
        salary : "Bilgi Yok",
        department : "Bilgi Yok"
    }
    onClickevent= (e) =>{
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    OnDeleteUser = async (dispatch,e) => {
        const {id} = this.props
        //Delete Request. RestApiden kaldırmak için
        await axios.delete(`http://localhost:3004/users/${id}`)// altgr virgül 2 times
        //Consumer Dispatch web sayfamızdan kaldırmak için
        dispatch({type : "DELETE_USER", payload:id});//actionum type:... payload:id oluyor
    }
    render() {
        //Detructing 
        const {id,name,department,salary} = this.props;
        const {isVisible} = this.state;

        return(
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div className = "col-md-8 mb-4">

                                <div className = "card" style={isVisible ? {backgroundColor : "purple", color:"white"}:null}>
                                    <div className ="card-header d-flex justify-content-between">
                                        <h4 className = "d-inline" onClick={this.onClickevent} > {name}</h4>
                                            <i onClick={this.OnDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" 
                                            style={{ cursor: "pointer",width:"10px",height:"10px" }}>X
                                            </i>
                                    </div>
                                    {
                                        isVisible ? <div className="card-body">
                                            <p className = "card-text"> Maaş: {salary}</p>
                                            <p className="card-text">Departmant: {department}</p>
                                            <Link to={`edit/${id}`} className="btn btn-dark btn-block">Update User</Link>
                                            </div>
                                            : null
                                            
                                    }
                                </div>  
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
        
    }
}

/*User.PropTypes ={
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    id:PropTypes.number.isRequired
}*/
export default User;
