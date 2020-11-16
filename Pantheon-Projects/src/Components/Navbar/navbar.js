import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Logo from '../images/dashboardImage/logo.png'
import Menu from '../images/dashboardImage/dashboardMenuIcon.png'
import './navbar.css'

function Navbar(props) {
    const [topchart, setTopchart] = useState([]);

    useEffect(() => {
        Axios
            .get("http://localhost:3005/topChart")
            .then(response => setTopchart(response.data))
    }, [])
    function onClick(e) {
        props.onChangedate(e.target.value)
    }
    return (
        <nav>
            <div className="d-image-logo">
                <a href="http://localhost:3000/">
                    <img style={{ width: "100%" }} src={Logo} alt="Logo" />
                </a>
            </div>

            <div class="d-menu">
                <ul>
                    <li><a>
                        <div className="d-1">
                            <img src={Menu} alt="Menu" />
                            <div class="triangle right"></div>
                        </div>
                    </a>
                        <ul>
                            {
                                topchart.map(dates => {
                                    return (
                                        <li><input type="submit" value={dates.date} onClick={onClick} /></li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
export default Navbar