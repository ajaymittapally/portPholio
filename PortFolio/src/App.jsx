import LoadingScreen from './components/LoadingScreen';
import './App.css';
import './index.css';
import { useState } from 'react';
import MobileMenu from './components/MobileMenu';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
function App() {

const [isLoading,setIsLoading] = useState(true)
const [menuOpen,setMenuOpen] = useState(false)
  return (
    <>
    {isLoading && <LoadingScreen onComplete ={()=>setIsLoading(false)}/>}
    <div className={`min-h-screen transition-opacity duration-700 ${
      isLoading?"opacity-0":"opacity-100"} 
      bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
