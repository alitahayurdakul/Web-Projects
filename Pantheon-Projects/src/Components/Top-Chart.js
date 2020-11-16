import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import StarRatings from 'react-star-ratings'
import facebookMessengerIcon from './images/appIcons/facebookMessengerIcon.jpg';
import driveClimberIcon from './images/appIcons/driveClimberIcon.jpg'
import bowMaster from './images/appIcons/bowMaster-multiplayerGameIcon.jpg'
import US from './images/flags/usa.png'
import UK from './images/flags/england.png'
import FR from './images/flags/france.png'
import './Component.css'

function TopChart(props) {
    const [appSuggestions, setappSuggestions] = useState([]);
    useEffect(() => {
        Axios
            .get("http://localhost:3005/topChart")
            .then(response => setappSuggestions(response.data))
    }, [])

    const onImageCountry=value=> {
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


    var datee = props.newdate;
    var d = new Date(datee);
    d.setDate(d.getDate() + 30);
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var lastday = `${year}-${month}-${day}`

    var intro2 = appSuggestions.filter(x => (x.date) == lastday)
    return (
        <div>
            <p className="headerapp" >Top Charts</p>

            <table>
                {
                    appSuggestions.map(intro => {
                        if (intro.date == datee) {
                            intro.apps.sort((a, b) => (a.rank > b.rank) ? 1 : (a.rank === b.rank) ? 1 : -1)
                            return (
                                intro.apps.map(app => {
                                    return (

                                        <tr key={app.id}>
                                            <td className="tdfirst">
                                                <p className="ranking">{app.rank}</p>
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
                                                {
                                                    intro2.map(x => {
                                                        return (
                                                            x.apps.map(y => {
                                                                if (y.id === app.id) {
                                                                    if (y.rank - app.rank < 0) {
                                                                        return (
                                                                            <div className="div-red" key={y.id}> <p>{y.rank - app.rank}</p>
                                                                                <div></div>
                                                                            </div>

                                                                        )
                                                                    }

                                                                    else if (y.rank - app.rank > 0) {
                                                                        return (
                                                                            <div className="div-green" key={y.id}> +{y.rank - app.rank}
                                                                                <div></div>
                                                                            </div>
                                                                        )
                                                                    }

                                                                    else {
                                                                        return (
                                                                            <div className="div-orange" key={y.id}> <p>{y.rank - app.rank}</p>
                                                                                <div >
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }

                                                                }
                                                            })
                                                        )
                                                    })
                                                }
                                            </td>
                                        </tr>
                                    )
                                })

                            )
                        }

                    })

                }

            </table>
        </div>
    )
}
export default TopChart
