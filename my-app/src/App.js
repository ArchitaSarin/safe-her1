import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Team } from './Components/team';
import { Forum } from './Components/forum.js';
import { About } from './Components/about.js';
import { Resources } from './Components/resources.js';
import { DataViz } from './Components/dataViz.js';
import { RantBot } from './Components/rantBot';
import { Art } from './Components/art.js';
import { Blog } from './Components/blog.js';
import { CreatePost } from './Components/createpost.js';
import { TestLogin } from './Components/testLogin.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Layout } from './Layout.js';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthProvider, useAuth } from './AuthContext';

function App() {
  return (
    <div className="App flex flex-1">
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/team' element={<Team />} />
              <Route path='/resources' element={<Resources />} />
              <Route path='/rant' element={<RantBot />} />
              <Route path='/art' element={<Art />} />
              <Route path='/createpost' element={
                <ProtectedRoute>
                  <CreatePostWrapper />
                </ProtectedRoute>
              }/>
              <Route path='/blog' element={<Blog />} />
              <Route path='/test-login' element={<TestLogin />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </div>
  );
}

const CreatePostWrapper = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/test-login" />;
  }
  return <CreatePost user={user} />;
};

export default App;
