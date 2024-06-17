
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import TopicPage from './topicPage'
import SingleArticle from './SingleArticle'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/by-topic' element={<TopicPage/>}></Route>
      <Route path='/single-article' element={<SingleArticle/>}></Route>
    </Routes>
    </>
  )
}

export default App
