import React from 'react'
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Today from '../pages/Today/Today'
import Total from '../pages/Total/Total'
import Nav from '../components/Nav'
import moment from 'moment'
import Yesterday from '../pages/Yesterday/Yesterday'
import News from '../pages/News'
import Home from '../pages/Home'


const FetchData = () => {
  // const [newSplitDate, setNewSplitDate]  = useState()
  // const [countryName, setCountryName] = useState()
  // const [countryCode, setCountryCode] = useState()
  const [totalDeaths, setTotalDeaths] = useState()
  const [totalCases, setTotalCases] = useState()
  const [totalRecovered, setTotalRecovered] = useState()
  const [lastUpdate, setLastUpdate] = useState()
  const [newCases, setNewCases] = useState()
  const [newDeaths, setNewDeaths] = useState()
  const [loading, setLoading] = useState(false)
  const [yesterdayDeaths, setYesterdayDeaths] = useState()
  const [yesterdayCases, setYesterdayCases] = useState()
  const [articles, setArticles] = useState([])



  useEffect(() => {
     const fetchCovidData = async () => {

      setLoading(true)

      // converts today's date in moment js format and then subracts 1 and 2 days from it 
      let twoDays = moment().subtract(2, 'days').format('YYYY-MM-DD');
      let oneDay = moment().subtract(1, 'days').format('YYYY-MM-DD');


      const  res1 = await fetch(`https://covid19-api.org/api/status/gb`)
      const {cases, deaths, last_update, recovered } = await res1.json()
    //  fetchs the difference for the selected country on deaths and cases 
      const res2 = await fetch('https://covid19-api.org/api/diff/gb')
      const {new_cases, new_deaths} = await res2.json()
      
      // fetches the deaths and cases from yesterday and day before to subtract one from the other.
      const res3 = await fetch(`https://covid19-api.org/api/status/gb?date=${twoDays}`)
      const dayTwo = (await res3.json())
      const res4 = await fetch(`https://covid19-api.org/api/status/gb?date=${oneDay}`)
      const dayOne = (await res4.json())

      const yesterdayDeaths = dayOne.deaths  - dayTwo.deaths
      const yesterdayCases = dayOne.cases - dayTwo.cases


       // fetch the news 

       const news = await fetch('https://content.guardianapis.com/search?q=%22coronavirus%22&api-key=9b549b4d-9451-47fb-aed2-a99a8f8c0562')
       const newsJson = await news.json()
       const articles = newsJson.response.results
       

    // sets the state 
      setTotalDeaths(deaths)
      setTotalCases(cases)
      setTotalRecovered(recovered)
      setLastUpdate(last_update)
      setNewCases(new_cases)
      setNewDeaths(new_deaths)
      setYesterdayCases(yesterdayCases)
      setArticles(articles)
      setYesterdayDeaths(yesterdayDeaths)
      
      setLoading(false)


    }
    
    fetchCovidData()

  }, [])
  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route path='/'  exact render={ () => <Home totalDeaths={totalDeaths} /> } /> 
          <Route path="/today" render={ () => <Today newDeaths={newDeaths}  newCases={newCases}/> } />
          <Route path="/yesterday" render={ () => <Yesterday yesterdayCases={yesterdayCases} yesterdayDeaths={yesterdayDeaths}/> } />
          <Route path='/news'  render={ () => <News articles={articles}/> } />
          <Route path='/news/:id' />
        </Switch>

        {!loading ? <Total  totalDeaths={totalDeaths} totalCases={totalCases} lastUpdate={lastUpdate} totalRecovered={totalRecovered} /> : <h1 className="loading">Loading...</h1>}
        
        <Footer  /> 
       </div>
    </Router>
   
   
  );
}

const Footer = ({time}) => (
  
  <div className="footer">
    
    <p className="year">Copyright &copy; { moment().format('YYYY')} Chris Clark </p>
  </div>
)

export default FetchData
