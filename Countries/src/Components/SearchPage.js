import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



function SearchPage(props) {
    const [countries, setCountries] = useState([]);
    const [searchvalue, setSearchvalue] = useState("");
    const [allcountries, setAllcountries] = useState([]);
    const [combo, setCombo] = useState([]);

    useEffect(() => {
        Axios
            .get(`https://restcountries.eu/rest/v2/name/${props.value}?fullText=true`)
            .then(response => setCountries(response.data))
        setSearchvalue(props.value)
    },[]);

    function onClick(e) {
        Axios
            .get(`https://restcountries.eu/rest/v2/name/${searchvalue}?fullText=true`)
            .then(response => setCountries(response.data))
    }
    useEffect(() => {
        Axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => setAllcountries(response.data))
    }, []);


    function onChange(e) {
        setSearchvalue(e.target.value)
    }

    function handleChange(e) {
        setSearchvalue(e.target.value);
    }

    useEffect(() => {
        Axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => setCombo(response.data))
    }, [])

    return (
        <div className="searchpage">
            <form className="frmsearch">
                <Link className="lnk blc" to="/">HomePage</Link>
                <input className="inp" type="search" placeholder="Please enter country name what you want " value={searchvalue}
                    onChange={onChange} >
                </input>
                <Link className="lnk" to="/search" onClick={onClick}>Search</Link>
                
            </form>

            <select className="slc" name="country" onChange={handleChange} >
                <option value="">Please Country Choose</option>
                {
                    combo.map(country => {
                        return (
                            <option key={country.name} value={country.name}>{country.name}</option>
                        )
                    })
                }

            </select>

            {
                countries.map(country => {
                    return (
                        <div className="country" key={country.name}>
                            <h1 className="header" >{country.name}</h1>
                            <img className="imge" src={country.flag} alt={country.name}></img>
                            <p><b className="bondcolor">Native Name: </b>{country.nativeName}</p>
                            <p><b className="bondcolor">Capital Name: </b>{country.capital}</p>
                            <b className="bondcolor">Languages:</b>
                            {
                                country.languages.map(countr=>{
                                    return(
                                        <li className="mad" key={countr.name}>{countr.name} </li>
                                    )
                                })
                            }
                           
                            
                            <p><b className="bondcolor">Population: </b>{country.population}</p>
                            <p><b className="bondcolor">Area: </b> {country.area} square kilometer</p>
                            <p><b className="bondcolor">Region: </b>{country.region}</p>
                            <b className="bondcolor">Borders: </b>{country.borders.map(border => {
                                return (
                                    allcountries.map(allcountry => {

                                        if (border === allcountry.alpha3Code) {
                                            return (
                                                <Link className="border" to="/search"  key={country.name}
                                                    onClick={() => {
                                                        Axios
                                                            .get(`https://restcountries.eu/rest/v2/name/${allcountry.name}?fullText=true`)
                                                            .then(response => setCountries(response.data))
                                                            setSearchvalue(allcountry.name)
                                                    }}>
                                                    {allcountry.name}  
                                                </Link>
                                            )
                                        }
                                        else return (
                                            <div> </div>
                                        );
                                    })
                                )
                            })}
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default SearchPage;
