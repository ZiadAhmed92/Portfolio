import { useState } from 'react'
import './App.css'
import Home from './Home.jsx/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
// import $ from 'jquery'
function App() {
 const[color ,setColor]= useState(["bg-black","bg-black1","bg-black2","bg-black3"])

//  if(screenTop>=500){
//   console.log("tmam")
//   $(".arrowUp").css("display","flex");
//   }else{
//       $(".arrowUp").css("display","none");
//   }
    
  // $(".arrowUp").click(function(){
  //     $("body,html").animate({scrollTop:0},1000)
  // })


  
 
  return (
    
    <div className={`pt-5 ${color[0]==="bg-white1"?"bg-white1 text-dark ":color[0]===undefined?" bg-white1 text-dark ":color[0] +" text-white "}`}>
    <Home color={color} setColor={setColor}/>
    <About color={color}/>
    {/* Projects */}
    <Projects color={color}/>
    <Contact  color={color}/>
    {/* <div className={` arrowUp position-fixed`}>
   
    <i className=" fa-solid fa-arrow-up"></i>
     </div> */}
    </div>
  )
}

export default App
