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
    <main className="articleList"
      data-aos='fade-left'
      data-aos-delay='600'
      data-aos-duration='800'>
    <h1 className='text-center py-10 h2 text-black mt-12'>LIST KONSULTASI WEBSITE</h1>
    <section className="articleList__section">
      {konsul.map((konsuls) => {
        
        return (
            <KonsultasiCard key={konsuls.id} konsul={konsuls}/>
           
          
        );
      })}
    </section>
    </main>
    </>
  );
}
