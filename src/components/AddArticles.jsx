import React from 'react'
import useInput from '../context/useInput'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../firebase-config'
import { useState } from 'react'
export default function AddArticles() {
    const [title,onTitleChange] = useInput()
    const [body,onBodyChange] = useInput()   
    const categoryOption = ['ayah','ibu','anak']
    const [category, setCategory] = useState(categoryOption[0])
    const articlesCollectionRef = collection(db, "article")
    const createArticles = async () => {
        const date = new Date()
        await addDoc(articlesCollectionRef,{title:title,body:body,date:date, category:category  })
    }
  return (
    <div className='flex flex-col align-middle'>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id='title' value={title} onChange={onTitleChange}/>
        <label htmlFor="body">Body</label>
        <textarea name="body" id="body" value={body} onChange={onBodyChange} cols="30" rows="10"></textarea>
        <select name="category" id="category" onChange={(e) => setCategory(e.target.value)} >
            {
                categoryOption.map((value)=>(
                    <option value={value} key={value}>{value}</option>
                ))
            }
        </select>
        <button type='submit' onClick={createArticles}>Submit</button>

    </div>
  )
}
