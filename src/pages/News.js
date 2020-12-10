import React from 'react'
import moment from 'moment'
// import { Link } from 'react-router-dom'


moment.locale();

const News = ({articles}) => (
  // console.log(articles)
  
<div className="news-grid">
  
{articles.map(article => 
<div key={article.id} className="news-div">
    <a rel="noreferrer" target="_blank" href={article.webUrl}> <h2>{article.webTitle}</h2> </a> 
    <div className="news-info-box">
      <h5>{article.sectionName}</h5>
      <h5>{article.type}</h5>
      <h5>{moment(article.webPublicationDate).format('Do MMMM  YYYY')}</h5>
    </div>
</div>)}

  
 </div> 
);
    




export default News