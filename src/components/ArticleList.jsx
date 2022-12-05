import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

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
    <div>
      {article.map((articles) => {
        return (
          <div key={articles.id}>
            <h1><Link to="/detail">{articles.title}</Link></h1>
            <p>Category : {articles.category}</p>
            <img src={articles.img} alt="" />
            <p>{articles.body}</p>
          </div>
        );
      })}
>>>>>>> de85908002a2f294a47bf0e0ec28ac116e0f788a
    </div>
  );
}
