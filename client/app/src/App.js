import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home"
import NewTweet from './pages/newTweet';
import Post from './pages/Post';


function App() {
  
  return (
  <div className="App">
    <Router>
      <div className='navbar'>
      <Link to='/newTweet'>Add new tweet</Link>
      <Link to='/'>Home pages</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/newTweet' element={<NewTweet/>} />
        <Route path='/Post/:id' element={<Post/>}/>
      </Routes>
    </Router>
  </div>
  
  );
}
export default App;
