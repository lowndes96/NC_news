import { useEffect, useState } from "react"
import {getArticle} from './api'

function SingleArticle({currentArticle}){
    const [displayArticle, setDisplayArticle] = useState([])
    const [haveArticle, setHaveArticle] = useState(false)

    useEffect(() => {
        getArticle(currentArticle).then((data) => {
            setHaveArticle(true)
            setDisplayArticle(data.article)
        })
        .catch((err) => {console.log(err)})
    },[currentArticle, haveArticle])

    if (haveArticle){
        const day = Date(displayArticle.created_at)
        return <main className='article-main'>
        <article className='article-art'>
            <header>
                <h1>{displayArticle.title}</h1>
                <h2>by {displayArticle.author}</h2>
                <h2>posted on {day.split('GMT')[0]}</h2>
            </header>
            <section>
            <h3>Topic: {displayArticle.topic}</h3>
            <h4>comments: {displayArticle.comment_count}</h4>
            <h4>Votes: {displayArticle.votes}</h4>
            </section>
            <img src={displayArticle.article_img_url} alt="" />
            <body>
                <p>{displayArticle.body}</p>
            </body>
        </article>
    </main>
    }
    else {
        return <main className='article-main'>
        <article className='article-art'>
            <header>
                <h1>loading article....</h1>
            </header>
        </article>
        </main>
    }

}

export default SingleArticle