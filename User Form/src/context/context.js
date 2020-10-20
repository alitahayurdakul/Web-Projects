import React, { Component } from 'react'
import axios from 'axios';

const UserContext=React.createContext();//Bu bize bir provier bir consumer verir.
//Provider sarmallar bu yüzden toptakine verilir.
//consumer state'yi nerede kullanacaksak orada kullanılır.

const reducer = (state,action) => {//reducerın görevi sadece state değiştirmektir.
    switch(action.type){
        case "DELETE_USER":
            return{
                ...state,//yeni stateye eski state'de ki değerleri geçirir.
                users: state.users.filter(user => action.payload !== user.id)//Yeni users(statenin içinde bulunan) burada güncellendi.
            }
        case "ADD_USER":
            return{
                ...state,
                users: [...state.users,action.payload]
            }
        case "UPDATE_USER":
            return{
                ...state,
                users: state.users.map((user) =>
                user.id === action.payload.id ? action.payload : user
                ),
            }
            default: return state//eski stateyi geri döndürür.
    }
}

export class UserProvider extends Component {
    state={
        users:[ ],
        dispatch : action =>{//actiona göre dispatch ile göndereceğiz valuenin içinde ve reducer ile güncellenmişi geri gelecek.
            this.setState(state => reducer(state,action))//state is güncellenmemiş state, action güncellenmiş state.
        }
    }
    componentDidMount= async () => {
        const response= await axios.get("http://localhost:3004/users")//dönen verileri get ile aldık ve response'e kaydettik
        this.setState({//geri dönen değerleri stateye kaydettik.
            users: response.data
        })
    }
    
    render() {
        return (//this.props.provider=App.js
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer=UserContext.Consumer;
export default UserConsumer;
