
import { useEffect, useState } from 'react'
import { getArticles } from './api'
import { Link } from "react-router-dom"
import { Oval } from 'react-loader-spinner'



function Home({setCurrentArticle}){
    const [allArticles, setAllArticles] = useState([])
    const [homeLoaded, setHomeLoaded] = useState(false)

    useEffect(() => {
        setHomeLoaded(false)
        getArticles().then(({articles}) => {
            console.log('home loaded')
            setAllArticles(articles)
            setHomeLoaded(true)
        })
        .then((err) => {
            console.log(err)
        })
    }, [])

    function HandleArticleClick(e){
        setCurrentArticle(e.target.id)
    }

    return <>
    <main className='home-main'>
        {homeLoaded ? null : <Oval></Oval>}
    {allArticles.map((article, index) => {
        if (index < 6) {
            const day = Date(article.created_at)
            return <Link className='home-art' to= {`/single-article`} key={index + 'h-a'} onClick={(e)=> {HandleArticleClick(e)}}><article  >
                <img id={article.article_id} src={article.article_img_url} alt="" />
            <h3 id={article.article_id}>{article.title}</h3>
            <h5 id={article.article_id}>{article.topic}</h5>
            <h5 id={article.article_id}>{day.split('GMT')[0]}</h5>
        </article>
        </Link>
        }
        else{
            const day = Date(article.created_at)
            return <Link className='home-art-2'to= {`/single-article`} key={index + 'h-a'}  onClick={(e)=> {HandleArticleClick(e)}} id={article.article_id} >
                <article id={article.article_id}>
            <h3 id={article.article_id}>{article.title}</h3>
            <h5 id={article.article_id}>{article.topic}</h5>
            <h5 id={article.article_id}>{day.split('GMT')[0]}</h5>
        </article>
        </Link>
        }
    })}
    </main>

    </>
}

export default Home