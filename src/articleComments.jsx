import { useEffect, useState } from 'react';
import { getArticleComments } from './api';

function ArticleComments({ currentArticle }) {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    getArticleComments(currentArticle).then((data) => {
      setAllComments(data);
    });
  }, []);

  console.log(allComments)

  if (allComments.length > 1) {
    return (
      <section className='comments-section'>
        {allComments.map((comment) => {
          return (
            <article className= 'comment-all'key={comment.comment_id}>
              <h6 className="commenter">{comment.author}</h6>
              <p className="comment-body">{comment.body}</p>
              <h6 className="commenter-votes">votes: {comment.votes}</h6>
              <button type="button">+</button>
              <button type="button">-</button>
            </article>
          );
        })}
      </section>
    );
  } else {
    return (
      <section className='comments-section'>
        <p>no comments</p>
      </section>
    );
  }
}

export default ArticleComments;
