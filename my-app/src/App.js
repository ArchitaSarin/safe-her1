import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from './Components/home.js';
import { About } from './Components/about.js';
import { Header } from './Components/header.js';
import { Footer } from './Components/footer.js';
import { Resources } from './Components/resources.js';
import { Art } from './Components/art.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App flex flex-1">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutme' element={<About/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/art' element={<Art/>}/>
        </Routes>
      </Router>
      <Footer /> 
    </div>
  );
}

export default App;
