import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home"
import NewTweet from './pages/newTweet';


function App() {
  
  return (
  <div className="App">
    <Router>
    <Link to='/newTweet'>Add new tweet</Link>
    <Link to='/'>Home pages</Link>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/newTweet' element={<NewTweet/>} />
      </Routes>
    </Router>
  </div>
  
  );
}
export default App;
