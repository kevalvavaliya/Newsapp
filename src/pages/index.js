import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import News from './NewsComponent'
import ShowArticle from "./ShowArticle";


const index = () => {
  //Routes
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<News />} />
        <Route exact path="/ShowArticle/:id" element={<ShowArticle />} />
      
      </Routes>
    </Router>
  )
}

export default index


