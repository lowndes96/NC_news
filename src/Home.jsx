import Header from './Header'
import Nav from './Nav'
import { useEffect, useState } from 'react'
import { getArticles } from './api'


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
            return <article key={index + 'h-a'} className='home-art'>
                <img src={article.article_img_url} alt="" />
            <h3>{article.title}</h3>
            <h5>{article.topic}</h5>
            <h5>{day.split('GMT')[0]}</h5>
        </article>
        }
        else{
            const day = Date(article.created_at)
            return <article key={index + 'h-a'} className='home-art-2'>
            <h3>{article.title}</h3>
            <h5>{article.topic}</h5>
            <h5>{day.split('GMT')[0]}</h5>
        </article>
        }
    })}
    </main>

    </div>
}

export default Home