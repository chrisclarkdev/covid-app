import React from 'react'
import moment from 'moment'

const Total = ({ totalDeaths, totalCases,lastUpdate, totalRecovered}) => {
  return (
    <div>
  <div className="total-container">

    <div className="left">
  <p className="caseText deaths-left">Total Deaths</p><h2>{totalDeaths}</h2>
    </div>
    <div className="centre">
  <p className="casesText cases-right">Total Cases</p> <h2>{totalCases}</h2> 
    </div>
    <div className="right">
  <p className="casesText cases-right">Recovered</p> <h2>{totalRecovered}</h2> 
    </div>
  </div>
  
  <p className="date-update">Last Update {moment(lastUpdate).calendar()}</p>
    </div>
  )
}

export default Total
