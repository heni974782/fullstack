import React from 'react'
import axios from "axios"; // package used to http methods (post, get, put...)
import {useEffect , useState} from "react"; // states used to import the api from the back-end
import {useNavigate} from 'react-router-dom'; // we use this state to pass the id in the url 

function Home() {

const [allPosts, setListOfPosts] = useState([]); // set a list of Posts fetched from the Data base 

let navigate = useNavigate();
  
// useEffect state is used to get the raw data from the specific server (local host) by pointing at the endpoint of the server 
  useEffect(() => {
    axios.get("http://localhost:3001/tweet").then((response) => {      
      setListOfPosts(response.data);  
    })
  }, [])
// we map through all the posts taken from the backend and display it 
  return (
    <div>
        {allPosts.map((value, key) => {
      return (
      <div className='post' onClick={() => {navigate(`/Post/${value.id}`)}}>   

      <div className='title'>  {value.title} </div>
      <div className='body'> {value.postText}</div>
      <div className='footer'> {value.username} </div>

      </div>      
      );
    })}
      
    </div>
  )
}
export default Home
