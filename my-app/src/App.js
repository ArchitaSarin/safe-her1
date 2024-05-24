import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Team } from './Components/team';
import { Forum } from './Components/forum.js';
import { About } from './Components/about.js';
import { Header } from './Components/header.js';
import { Footer } from './Components/footer.js';
import { Resources } from './Components/resources.js';
import { DataViz } from './Components/dataViz.js';
import { RantBot } from './Components/rantBot';
import { Art } from './Components/art.js';
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
          <Route path='/rant' element={<RantBot/>}/>
          <Route path='/art' element={<Art/>}/>
          <Route path='/datavis' element={<DataViz/>}/>

        </Routes>
      </Router>
      <Footer /> 
    </div>
  );
}

export default App;
