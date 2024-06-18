
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import TopicPage from './topicPage'
import SingleArticle from './SingleArticle'
import { useState } from 'react'
import Header from './Header'
import Nav from './Nav'

function App() {
  const[currentArticle, setCurrentArticle] = useState('')

  return (
    <>
        <Header/>
        <Nav/>
    <Routes>
      <Route path='/' element={<Home setCurrentArticle={setCurrentArticle} currentArticle= {currentArticle}/>}></Route>
      <Route path='/by-topic' element={<TopicPage/>}></Route>
      <Route path='/single-article' element={<SingleArticle currentArticle={currentArticle}/>}></Route>
    </Routes>
    </>
  )
}

export default App
