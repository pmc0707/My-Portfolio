import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './container/home';
import About from './container/about';
import Contact from './container/contact';
import Portfolio from './container/portfolio';
import Resume from './container/resume';
import Skills from './container/skills';
import NavBar from './component/navBar';
function App() {
  return (
      <div className='App'>

        <NavBar/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
      </div>
  );
}

export default App;
