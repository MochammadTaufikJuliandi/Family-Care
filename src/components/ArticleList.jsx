import React from 'react'
import { useState, useEffect } from "react";
import { db } from '../firebase-config';
import {collection, getDocs} from 'firebase/firestore'



export default function ArticleList() {
    const [article, setArticle] = useState([])
    useEffect(()=>{
        const getData = async ()=>{
            const articlesCollectionRef = collection(db, "articles")
            const data = await getDocs(articlesCollectionRef)
            setArticle(data.docs.map(doc => ({...doc.data(), id:doc.id})))
        }
        getData()
    },[article])

  return (
    <div>
        {article.map((articles) =>{
            return (<div key={articles.id}> 
                <h1>{articles.title}</h1>
                <p>{articles.body}</p>
                <img src={articles.img} alt='' />
                <p>Category : {articles.category}</p>
                </div>)
        })}
    </div>
  )
}
