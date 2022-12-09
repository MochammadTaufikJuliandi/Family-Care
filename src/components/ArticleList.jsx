import React from "react";
import { useState, useEffect } from "react";
import  '../styles/ArticleList.css'
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const articlesCollectionRef = collection(db, "article");
      const data = await getDocs(articlesCollectionRef);
      setArticle(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     
    };
    getData();
    
  }, []);

  return (
    <>
    <main className="articleList"
      data-aos='fade-right'
      data-aos-delay='600'
      data-aos-duration='800'>
    <h1 className='text-center py-10 h2 text-black'>LIST ARTIKEL</h1>
    <section className="articleList__section">
      {article.map((articles) => {
        
        return (
            <ArticleCard key={articles.id} article={articles}/>
           
          
        );
      })}
    </section>
    </main>
    </>
  );
}
