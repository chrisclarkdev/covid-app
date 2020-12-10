import React from 'react'

const Home = ({totalDeaths}) => {
  return (
    <div>
      <h1 className="homepage-title">Covid-19 UK Figures</h1>
      <p className="hp-paragraph">Well it's been one hell of a year, unfortunately there has been over <strong>{totalDeaths}</strong> deaths so far and there is still a way to go before any vaccine is delivered in any great numbers to the population. </p>
      <p className="hp-paragraph">This has been an awful year for so many families who have lost loved ones, but less not forget our wonderful NHS, the people who keep that running deserve a bloody medal and a good pay rise.</p>

      <p className="hp-paragraph">As the year comes to a close and 2021 begins, I think it's vital that we keep vigilant against this awful virus and keep washing our hands, keep 2 metres apart and WEAR A MASK to protect other around us. Hopefully 2021 will be better year than this, but it's still not going to return normal for a long time.  </p>
    </div> 
  )
}

export default Home
