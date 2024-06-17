import Header from './Header'
import Nav from './Nav'
import { useEffect, useState } from 'react'
import { getArticles } from './api'
import { Link } from "react-router-dom"


function Home(){
    const [allArticles, setAllArticles] = useState([])

    useEffect(() => {
        getArticles().then(({articles}) => {
            setAllArticles(articles)
        })
    }, [])


    return <div>
    <Header/>
    <Nav/>
    <main className='home-main'>
    {allArticles.map((article, index) => {
        if (index < 6) {
            const day = Date(article.created_at)
            return <Link className='home-art' to= {`/single-article`}><article key={index + 'h-a'} >
                <img src={article.article_img_url} alt="" />
            <h3>{article.title}</h3>
            <h5>{article.topic}</h5>
            <h5>{day.split('GMT')[0]}</h5>
        </article>
        </Link>
        }
        else{
            const day = Date(article.created_at)
            return <Link className='home-art-2'to= {`/single-article`}><article key={index + 'h-a'} >
            <h3>{article.title}</h3>
            <h5>{article.topic}</h5>
            <h5>{day.split('GMT')[0]}</h5>
        </article>
        </Link>
        }
    })}
    </main>

    </div>
}

export default Home