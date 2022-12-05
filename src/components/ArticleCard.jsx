import React from 'react'
import '../styles/ArticleCard.css'
import {Link} from 'react-router-dom'

export default function ArticleCard({article}) {
    console.log(article)
    
  return (
    <article className='card__article'>
        <div className="card__img">
            <img src={article.img} alt={article.title} />
        </div>
        <div className="card__detail">
            <h2><Link to={`detail/${article.id}`}>{article.title}</Link></h2>
            <div className="card__detail__container">
            <p className='card__body'>{article.body}</p>
            </div>
            <p className='card__category' >Category: <span>{article.category}</span></p>
        </div>
    </article>
  )
}
