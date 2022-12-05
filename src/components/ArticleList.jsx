import React from "react";
import { useState, useEffect } from "react";
import  '../styles/ArticleList.css'
import {Link} from 'react-router-dom'
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ArticleCard from "./ArticleCard";
export default function ArticleList() {
  const [article, setArticle] = useState([{title: 'Cara Menjadi Ayah Yang Baik', body: 'Negara Indonesia yang berbentuk kepulauan dilengkapi dengan pegunungan di hampir setiap pulaunya. Yuk, cari tahu gunung tertinggi di Indonesia!Indonesia menjadi salah satu negara dengan jumlah gunung terbanyak.', category: 'Ayah', img: 'https://asset.kompas.com/crops/rVcl3isK2OuI66IO99WFvX7csrg=/0x0:0x0/750x500/data/photo/2020/10/19/5f8d4104861d2.jpg', id: 'ar7n4lGJ07gdp0L5D3XL'}]);
  useEffect(() => {
    // const getData = async () => {
    //   const articlesCollectionRef = collection(db, "article");
    //   const data = await getDocs(articlesCollectionRef);
    //   setArticle(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   console.log('loop')
    // };
    // getData();
    
  }, []);

  return (
    <>
    <main className="articleList">
    <h1>Article List</h1>
    <section className="articleList__section">
        {/* <ArticleCard/> */}
      {article.map((articles) => {
        
        return (
            <ArticleCard article={articles}/>
           
          
        );
      })}
    </section>
    </main>
    </>
  );
}
