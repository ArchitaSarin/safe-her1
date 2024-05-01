import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Team } from './Components/team';
import { Forum } from './Components/forum.js';
import { About } from './Components/about.js';
import { Header } from './Components/header.js';
import { Footer } from './Components/footer.js';
import { Resources } from './Components/resources.js';
import { Art } from './Components/art.js';
import ArtDisplay from './Components/artdisplay.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App flex flex-1">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/forum' element={<Forum/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/art' element={<Art/>}/>
          <Route path='/artdisplay' element={<ArtDisplay/>}/>
        </Routes>
      </Router>
      <Footer /> 
    </div>
  );
}

export default App;
