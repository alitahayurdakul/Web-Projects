import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import StarRatings from 'react-star-ratings'
import facebookMessengerIcon from './images/appIcons/facebookMessengerIcon.jpg';
import driveClimberIcon from './images/appIcons/driveClimberIcon.jpg'
import bowMaster from './images/appIcons/bowMaster-multiplayerGameIcon.jpg'
import US from './images/flags/usa.png'
import UK from './images/flags/england.png'
import FR from './images/flags/france.png'



function Tracked_Apps() {
    const [trackedApp, setTrackedApp] = useState([]);
    useEffect(() => {
        Axios
            .get("http://localhost:3004/trackedApps")
            .then(response => setTrackedApp(response.data))
    }, [])

    const onImageIcon = value => {
        if (value === "facebookMessengerIcon.jpg") {
            return `${facebookMessengerIcon}`;
        }
        else if (value === "driveClimberIcon.jpg") {
            return `${driveClimberIcon}`
        }
        else {
            return `${bowMaster}`
        }
    }

    function onImageCountry(value) {
        if (value === "US") {
            return `${US}`;
        }
        else if (value === "UK") {
            return `${UK}`
        }
        else {
            return `${FR}`
        }
    }

    let newarray = trackedApp.sort((a, b) => (a.rank < b.rank) ? 1 : (a.rank === b.rank) ? 1 : -1)
    let i = 0;

    return (
        <div>
            <p className="headerapp">Tracked Apps</p>

            <table>
                {

                    newarray.map(app => {
                        i += 1;
                        return (
                            <tr key={app.id} >
                                <td className="tdfirst">
                                    <p className="ranking">{i}</p>
                                    <img className="imgicon" src={onImageIcon(app.iconName)} alt="AppIcon"  />
                                    <div className="m-5">
                                        <p className="appname">{app.name}</p>
                                        <div style={{ display: "flex", margin: "2px 0" }}>

                                            <img className="img-country" src={onImageCountry(app.country)} alt="Country" />
                                            <p className="app-publisher">{app.publisher}</p>
                                            <StarRatings
                                                rating={app.rating}
                                                starRatedColor="yellow"
                                                starDimension="10px"
                                                starSpacing="0.5px"
                                                numberOfStars={5}
                                                name='rating'
                                            />
                                            <p className="cg">(1.234)</p></div>

                                    </div>
                                </td>
                                <td className="td-second">
                                    {newarray.map(appprogress => {
                                        if (appprogress.id === app.id) {
                                            if (appprogress.progress < 0) {
                                                return (

                                                    <div className="div-red"> <p>{app.progress}</p>
                                                        <div></div>
                                                    </div>

                                                )
                                            }

                                            else if (appprogress.progress > 0) {
                                                return (
                                                    <div className="div-green" key={app.id}><p>+{appprogress.progress}</p> 
                                                        <div ></div>
                                                    </div>
                                                )
                                            }

                                            else {
                                                return (
                                                    <div className="div-orange" key={app.id}> <p >{appprogress.progress}</p>
                                                        <div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        }

                                    })

                                    }
                                </td>
                            </tr>
                        )
                    })

                }

            </table>
        </div>
    )
}

export default Tracked_Apps
