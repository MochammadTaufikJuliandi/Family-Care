/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { getDoc, doc } from "firebase/firestore";


export default function DetailKonsul() {
  const {id} = useParams()

  const [konsul, setKonsul] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const konsulsCollectionRef = doc(db, "konsul",  id);
      const data = await getDoc(konsulsCollectionRef);
      setKonsul(data.data());
      
     
    };
    getData();
  },[])
  
  if(konsul === undefined) {
   return( <h1></h1>)
  }else{
    return (
      <div className="detail"
      data-aos='fade-up'
      data-aos-delay='600'
      data-aos-duration='800'>
          <h1 className="title mt-16">{konsul.title}</h1>
          <h4>Contact : {konsul.contact}</h4>
          <img
            src= {konsul.img}
            alt={konsul.title} />
          <p> {konsul.body}</p>
      </div>
    );
  }
  
}
