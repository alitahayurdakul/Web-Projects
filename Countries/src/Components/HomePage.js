import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function HomePage(props) {
    const [value, setValue] = useState("");
    const [countries, setCountries] = useState([]);

    function changevalue(e) {
        setValue(e.target.value)
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    useEffect(() => {
        Axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => setCountries(response.data))
    }, [])
    return (
        <div className="homegage">
            <form className="frm">
                <input className="inp" type="search" placeholder="Please enter country name what you want " value={value}
                    onChange={changevalue} ></input>
                <Link className="lnk" to="/search" onClick={() => props.changeinitial(value)}>Search</Link>
            </form>

            <select className="slchome" name="country" onChange={handleChange} >
                <option value="">Please Country Choose</option>
                {
                    countries.map(country => {
                        return (
                            <option key={country.name} value={country.name}>{country.name}</option>
                        )
                    })


                }

            </select>
        </div>
    )
}

export default HomePage
