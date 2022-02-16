import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navigation }  from './components/Navbar/Navbar'; 
import { Home }  from './components/Home/Home'; 
import { Projects } from './components/Projects/Projects'; 
import { Blog }  from './components/Blog/Blog'; 

function App() {
  return (
    <Router>
      <Navigation />
      <nav className='navigation'>
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/blog"> Blog </Link>
        </nav>
      <Routes>
        <Route path="/" element={ <div id='home-main'> <Home /> </div> } />
        <Route path="/projects" element={ <div id='projects-main'><Projects /></div>} />
        <Route path="/blog" element={ <div id='blog-main'><Blog /></div> } />
      </Routes>
    </Router>
  );
}

export default App;
