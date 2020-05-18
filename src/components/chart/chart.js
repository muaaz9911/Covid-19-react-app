import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';
import './chart.css'

function Chart(props) {


    return (
      
        <div className='containerchart'>
        
      <Line
        data={{
          labels: props.apidata.map((date) =>date.reportDate ),
          datasets: [{
            data: props.apidata.map((data) => data.totalConfirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: props.apidata.map((data) => data.deaths.total),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
       
      />
        </div>
    )
}

export default Chart


