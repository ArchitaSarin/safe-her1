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
import { Blog } from './Components/blog.js'
import { CreatePost } from './Components/createpost.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Layout } from './Layout.js';

function App() {
  return (
    <div className="App flex flex-1">
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/forum' element={<Forum />} />
            <Route path='/team' element={<Team />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/rant' element={<RantBot />} />
            <Route path='/art' element={<Art />} />
            <Route path='/createpost' element={<CreatePost />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
