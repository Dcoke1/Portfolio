import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { NavBar }  from './components/Nav/NavBar'; 
import { Home }  from './components/Home/Home'; 
import { Projects } from './components/Projects/Projects';

const App = () => {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <main id='home'> <Home /></main> } />
        <Route path="/projects" element={ <main id='projects'><Projects /></main>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
