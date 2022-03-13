import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar }  from './components/Nav/NavBar'; 
import { Home }  from './components/Home/Home'; 
import { Projects } from './components/Projects/Projects'; 
import { Footer }  from './components/Footer/Footer'; 

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/react_portfolio" element={ <main id='home'> <Home /></main> } />
        <Route path="/projects" element={ <main id='projects'><Projects /></main>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
