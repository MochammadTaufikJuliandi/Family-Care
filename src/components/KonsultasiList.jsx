import React from "react";
import { useState, useEffect } from "react";
import  '../styles/ArticleList.css'
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import KonsultasiCard from "./KonsultasiCard";

export default function KonsultasiList() {
  const [konsul, setKonsul] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const konsulsCollectionRef = collection(db, "konsul");
      const data = await getDocs(konsulsCollectionRef);
      setKonsul(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     
    };
    getData();
    
  }, []);

  return (
    <>
    <main className="articleList">
    <h1>Your Option For Consultation</h1>
    <section className="articleList__section">
      {konsul.map((konsuls) => {
        
        return (
            <KonsultasiCard konsul={konsuls}/>
           
          
        );
      })}
    </section>
    </main>
    </>
  );
}
