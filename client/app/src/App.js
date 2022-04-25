import './App.css';
import axios from "axios";
import {useEffect , useState} from "react"; // states used to import the api from the back-encd


function App() {
  
  const [allPosts, setListOfPosts] = useState([]); // set a list of Posts fetched from the Data base 

  // useEffect state is used to get the raw data from the specific server local host 
  useEffect(() => {
    axios.get("http://localhost:3001/tweet").then((response) => {
      
      setListOfPosts(response.data);  

    })
  }, [])

  return <div className="App">
    {allPosts.map((value, key) => {
      return (
      <div className='post'>   

      <div className='title'>  {value.title} </div>
      <div className='body'> {value.postText}</div>
      <div className='footer'> {value.username} </div>


      </div>
      

      );


    })}
  </div>;
}

export default App;
