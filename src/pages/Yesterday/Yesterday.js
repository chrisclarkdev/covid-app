const Yesterday = ({yesterdayCases, yesterdayDeaths}) => {

  

  return (
    <div>
      <div className="cases-container">
      <div className="left">
  <p className="caseText deaths-left">Yesterday's Deaths</p><h2>{yesterdayDeaths} </h2>
      </div>
      <div className="right">
  <p className="casesText cases-right">Yesterday's Cases</p> <h2>{yesterdayCases}</h2> 
      </div>
    </div>
    </div>
  )
}

export default Yesterday
