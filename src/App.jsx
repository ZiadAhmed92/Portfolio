import { useState } from 'react'
import './App.css'
import Home from './Home.jsx/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
function App() {
 const[color ,setColor]= useState(["bg-black","bg-black1","bg-black2","bg-black3"])


 
  return (
    
    <div className={`pt-5 ${color[0]==="bg-white1"?"bg-white1 text-dark ":color[0]===undefined?" bg-white1 text-dark ":color[0] +" text-white "}`}>
    <Home color={color} setColor={setColor}/>
    <About color={color}/>
    {/* Projects */}
    <Projects color={color}/>
    <Contact  color={color}/>
    </div>
  )
}

export default App
