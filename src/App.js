import React ,{useEffect , useState} from 'react';
import axios from 'axios';
import Card from './components/card/card';
import Chart from './components/chart/chart';
import Countrypicker from './components/countrypicker/countrypicker';
import './App.css';
import {fetchdata} from './api';
import {fetchdailydata} from './api';

function App() {

  const [confirmed , setConfirmed] =useState([]);
  const [recovered , setRecovered] =useState([]);
  const [deaths , setDeaths] =useState([]);
  const [lastUpdate , setLastUpdate] =useState([]);
  const [dailyData , setDailyData] =useState([]);
  const [countries , setCountries] =useState([]);
  const [country , setCountry] =useState('usa');
  const [countrydata , setCountrydata] =useState([]);
  const [url , setUrl] =useState('https://covid19.mathdro.id/api');
  const [urldaily , setUrldaily] =useState('https://covid19.mathdro.id/api/daily');

 const  countrychangehandle = (country)=>{

    console.log(country);
    if(country == 'global'){
      setUrl('https://covid19.mathdro.id/api');
    }
    else{
    setUrl(`https://covid19.mathdro.id/api/countries/${country}`);
    setCountry(country);
    console.log(url);
    console.log(country);
    }
  }

  useEffect(()=>{


const fetchdata=()=>{
        axios.get(url)
      .then((res) => {
        setConfirmed(res.data.confirmed);
        setRecovered(res.data.recovered);
        setDeaths(res.data.deaths);
        setLastUpdate(res.data.lastUpdate);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

}


const fetchdailydata=()=>{

        axios.get(urldaily)
        .then((res) => {
          setDailyData(res.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

     //not used   
    axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
    .then((res) => {
      setCountrydata(res.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
     

}

const fetchcountries=()=>{
  axios.get(`${url}/countries`)
  .then((res) => {
    setCountries(res.data.countries);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

}
 
    fetchdata();
    fetchdailydata();
    fetchcountries();
  },[url]);
  
  return (
    
    <div className="App">   
      <h1>Covid 19 updates</h1>
      <div className="container">
      <Card 
      confirmedcases={confirmed}
      recoveredcases={recovered}
      deaths={deaths}
      lastupdate={lastUpdate}
       />
      <Countrypicker cdata = {countries} countrychangehandle={countrychangehandle}></Countrypicker>
      <Chart apidata = {dailyData}></Chart>
    
      </div>
    </div>
  );
}

export default App;
