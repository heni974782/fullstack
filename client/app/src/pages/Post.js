import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
//import {useNavigate} from 'react-router-dom';


function Post() {
    let { id } = useParams();

    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    // we get the id from the server by pointing to the right endpoint of the server 
    useEffect(() => {
        axios.get(`http://localhost:3001/tweet/byId/${id}`).then((response) => {
            //console.log(response);
            setPostObject(response.data);
        })

        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
            setComments(response.data);
        })    
    }, [])

    const addComment = () => {
        axios
        .post("http://localhost:3001/comments", {commentBody: newComment , PostId: id })
        
        .then((response) => {
            const commentToAdd = {commentBody : newComment};
            setComments([...comments, commentToAdd])
            setNewComment("")

        })
    }

    const deletePost = (id) => {
        axios
        .delete(`http://localhost:3001/tweet/${id}`)
        
        .then(() => {
            alert("tweete deleted")
        })
    }

  return (
    <div className='postPage'>
        <div className='leftSide'>
            <div className='post' id='individual'>
            <div className='title'>{postObject.title}</div>
            <div className='body'>{postObject.postText}</div>
            <div className='footer'>{postObject.username} 
                <button onClick={() => {
                    deletePost(postObject.id)
                }}   >  

                {" "}
                Delete 
                </button>
            </div>
            </div>
        </div>

        <div className='rightSide'>
            <div className='addCommentContainer'>
                <input 
                type="text" 
                placeholder="Comment...."  
                value={newComment}
                autoComplete='off'  
                onChange={(event) => {setNewComment(event.target.value)}}    />
                <button onClick={addComment}> Comment on the tweet </button>
            </div>
            <div className="listOfComments">
                {comments.map((comment, key) => {
                    return <div key={key} className='comment' > {comment.commentBody} </div>
                })}
            </div>
        </div>

     
    </div>
  )
}

export default Post
