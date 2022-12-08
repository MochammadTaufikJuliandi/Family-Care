import React from 'react'
import '../styles/ArticleCard.css'
import {Link} from 'react-router-dom'

export default function KonsultasiCard({konsul}) {
  return (
    <article className='card__article'>
        <div className="card__img">
            <img src={konsul.img} alt={konsul.title} />
        </div>
        <div className="card__detail">
            <h2><Link to={`/detail/${konsul.id}`}>{konsul.title}</Link></h2>
            <div className="card__detail__container">
            <p className='card__body'>{konsul.body}</p>
            </div>
            <p className='card__category' >Contact: <span>{konsul.contact}</span></p>
        </div>
    </article>
  )
}
