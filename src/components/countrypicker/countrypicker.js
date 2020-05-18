import React, { useState, useEffect } from 'react';
import axios from 'axios';

function countrypicker(props) {


    // const [countrydata , setCountrydata] =useState([]);
    return (
        <div>
            <h3>Select Country</h3>

            <label for="cars">Countries : </label>
            <select id="cars"  onChange={(e) => props.countrychangehandle(e.target.value)} >
            <option value="global">global</option>
            {props.cdata.map((country, i) => <option key={i} value={country.name}>{country.name}</option>)}
            </select>
        </div>
    )
}

export default countrypicker
