import { useState } from 'react'
import './App.css'
import "./index.css"
import LoadingScreen from './components/LoadingScreen'
import NavBar from './components/NavBar'
import MobileMenu from './components/MobileMenu'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)} /> }
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>

      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </>
  )
}

export default App
