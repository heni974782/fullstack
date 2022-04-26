import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Post() {
    let { id } = useParams();

    const [postObject, setPostObject] = useState({});

    // we get the id from the server by pointing to the right endpoint of the server 
    useEffect(() => {
        axios.get(`http://localhost:3001/tweet/byId/${id}`).then((response) => {
            //console.log(response);
            setPostObject(response.data);
        })
    })

  return (
    <div className='postPage'>
        <div className='leftSide'>
            <div className='post' id='individual'>
            <div className='title'>{postObject.title}</div>
            <div className='body'>{postObject.postText}</div>
            <div className='footer'>{postObject.username}</div>
            </div>
        </div>

        <div className='rightSide'>comment </div>

     
    </div>
  )
}

export default Post
