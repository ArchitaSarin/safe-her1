import './App.css';
import { Home } from './Components/home.js';
import { About } from './Components/about.js';
import { Header } from './Components/header.js';
import { Footer } from './Components/footer.js';
import { Resources } from './Components/resources.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutme' element={<About/>}/>
          <Route path='/resources' element={<Resources/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
