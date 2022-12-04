import React from 'react'

import Header from "../components/Header"
import Feature from "../components/Feature";
import Video from "../components/Video";
import ArticleList from "../components/ArticleList";
import AddArticles from "../components/AddArticles";
export default function HomePage() {
  return (
    <>
       <Header/>
        <Video/>
        <Feature/>
        <ArticleList/>
        <AddArticles/>
    </>
  )
}
