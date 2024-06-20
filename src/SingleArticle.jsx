import { useEffect, useState } from 'react';
import { getArticle, patchArticleVotes } from './api';
import ArticleComments from './articleComments';

function SingleArticle({ currentArticle }) {
  const [displayArticle, setDisplayArticle] = useState([]);
  const [haveArticle, setHaveArticle] = useState(false);
  const [commentsVisable, setCommentsVisable] = useState(false);
  const [voteCount, setVoteCount] = useState(null);
  const [voteClick, setVoteClick] = useState(null);

  useEffect(() => {
    getArticle(currentArticle)
      .then((data) => {
        setHaveArticle(true);
        setDisplayArticle(data.article);
        setVoteCount(data.article.votes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentArticle, haveArticle]);

  function HandleCommentsVisable() {
    setCommentsVisable(!commentsVisable);
  }

  function HandleVote(e) {
    if (voteClick !== e.target.value ){
      const voteObject = { inc_votes: e.target.value };
      setVoteCount(Number(voteCount) + Number(voteObject.inc_votes));
      patchArticleVotes(currentArticle, voteObject)
        .then((data) => {
          setVoteCount(data.votes);
          setVoteClick(e.target.value);
          console.log(voteClick)
        })
        .catch((err) => {
          console.log(err);
          setVoteCount(Number(voteCount) - Number(voteObject.inc_votes));
        });
    }

  }

  if (haveArticle) {
    const day = Date(displayArticle.created_at);
    return (
      <main className="article-main">
        <article className="article-art">
          <header>
            <h1>{displayArticle.title}</h1>
            <h2>by {displayArticle.author}</h2>
            <h2>posted on {day.split('GMT')[0]}</h2>
          </header>
          <section>
            <h3>Topic: {displayArticle.topic}</h3>
            <h4>comments: {displayArticle.comment_count}</h4>
            <h4>Votes: {voteCount}</h4>
          </section>
          <img src={displayArticle.article_img_url} alt="" />
          <body>
            <p>{displayArticle.body}</p>
          </body>
        </article>
        <section>
          <button
            onClick={(e) => {
              HandleVote(e);
            }}
            value={1}
            className={voteClick==='1' ? 'clicked-col' : 'unclicked-col'}
          >
            upvote
          </button>
          <button
            onClick={(e) => {
              HandleVote(e);
            }}
            value={-1}
            className={voteClick==='-1' ? 'clicked-col' : 'unclicked-col'}
          >
            downvote
          </button>
          <button
            onClick={() => {
              HandleCommentsVisable();
            }}
          >
            {commentsVisable ? 'hide' : 'show'} Comments
          </button>
        </section>
        {commentsVisable ? (
          <ArticleComments currentArticle={currentArticle} />
        ) : null}
      </main>
    );
  } else {
    return (
      <main className="article-main">
        <article className="article-art">
          <header>
            <h1>loading article....</h1>
          </header>
        </article>
      </main>
    );
  }
}

export default SingleArticle;
