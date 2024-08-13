import { useState } from "react"
import { postArticleComments } from "./api"



function AddComment(currentArticle){
    const [newComment, setNewComment] = useState({username: "tickle122", body: ''})
    const [addingComment, setAddingComment] =useState(false)


    function HandleChangeComment(e)  {
        setNewComment({...newComment, body: e.target.value})
    }

    function HandleAddComment(e) {
        e.preventDefault()
        setAddingComment(true)
        postArticleComments(currentArticle, newComment).then(
            (data) => {
                console.log(data, 'post article data')
                setNewComment({username: "tickle122", body: ''})
                setAddingComment(false)
            }
        )
        .catch((err) => {
            console.log(err)
        })
    }

    return <section>
        <form onSubmit={(e)=> {HandleAddComment(e)}} >
    <label htmlFor="comment-text">posting as user {newComment.username}</label>
    <br />
    <textarea required value={newComment.body} onChange={(e)=>{HandleChangeComment(e)}} name="comment-text"  id="comment-text" rows="4" cols="150" placeholder="tell us what you think of this article..."></textarea>
    <br />
    <input type="submit" value='post comment'/>
        </form>
    {addingComment ? <p>posting...</p> : null }
    </section>
}

export default AddComment