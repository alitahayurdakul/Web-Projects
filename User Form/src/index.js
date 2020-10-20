import React from 'react'
import ReactDOM from 'react-dom'
import {UserProvider} from './context/context'
import App from './app'

ReactDOM.render(
    //Sarmalı oluşturduk böylece state'yi global yaptık bu sarmalın içindekilerde kullanılabilecek.
    <UserProvider>
        <App />
    </UserProvider>,
    document.querySelector("#root")
)


