/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { getDoc, doc } from "firebase/firestore";


export default function DetailArticle() {
  const {id} = useParams()

  const [article, setArticle] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const articlesCollectionRef = doc(db, "article",  id);
      const data = await getDoc(articlesCollectionRef);
      setArticle(data.data());
      
     
    };
    getData();
  },[])
  
  if(article === undefined) {
   return( <h1></h1>)
  }else{
    return (
      <div className="detail"
      data-aos='fade-up'
      data-aos-delay='600'
      data-aos-duration='800'>
          <h1 className="title">{article.title}</h1>
          <h4>Kategori : {article.category}</h4>
          <img
            src= {article.img}
            alt={article.title} />
          <p> {article.body}</p>
      </div>
    );
  }
  
}
