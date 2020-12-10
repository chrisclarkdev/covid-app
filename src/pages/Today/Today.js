import React from 'react'
import '../Today/Today.css'

const Today = ({newDeaths, newCases}) => {
  return (
    <div className="cases-container">
      <div className="left">
        <p className="caseText deaths-left">Today's Deaths</p><h2>{newDeaths}</h2>
      </div>
      <div className="right">
  <p className="casesText cases-right">Today's Cases</p> <h2>{newCases}</h2> 
      </div>
    </div>

  )
}

export default Today
