import React from 'react'

const Home = ({color ,setColor}) => {

  function Colors(colors){
    // localStorage.setItem("defaultColor" , colors)  
    setColor(colors)
  
  }
  return (
    <div>
        <h1 className='text-app text-center py-5'>I'm Ziad Ahmed</h1>
        <div className={`parent-home  ${color[0]==="bg-white1"?"bg-white2  borderblack":color[0]===undefined?" bg-white2 borderblack ":""+" borderwhite "}  `}>
        <nav className={`navbar  p-0 navbar-expand-lg ${color[0]==="bg-white1"?"bg-white2   borderblack-bottom":color[0]+" borderwhite-bottom "}   `}>
  <div className={`container-fluid`}>
       <div>
       <span className="spanColor bg-danger"></span>
        <span className="spanColor bg-warning"></span>
        <span className="spanColor bg-info"></span>
       </div>
    <button className={`navbar-toggler ${color[0]?color[3]==="bg-white4"?" bg-transparent":color[3]:""}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className={`nav-link ${color[0]==="bg-white1"?" text-dark": color[0]===undefined?" text-dark":" text-white"}  active `} aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${color[0]==="bg-white1"?" text-dark": color[0]===undefined?" text-dark":" text-white"}  active `} aria-current="page" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${color[0]==="bg-white1"?" text-dark": color[0]===undefined?" text-dark":" text-white"}  active `} aria-current="page" href="#">Contact</a>
        </li>
      </ul>
      </div>
       
     
    
  </div>
        </nav>

        <div className={`container-fliud ${color[1]}`}>
            <div className="home-me row py-5">
                <div className="Personalize col-md-6 text-center">
                    <h4>Personalize Theme</h4>
                    <span onClick={()=> Colors(["bg-black","bg-black1","bg-black2","bg-black3"])} className="spanColor1 bg-black"></span>
                    <span onClick={()=> Colors(["bg-white1","bg-white2","bg-white3","bg-white4"])} className="spanColor1 bg-white"></span>
                    <span onClick={()=> Colors(["bg-grey","bg-grey1","bg-grey2","bg-grey3"])} className="spanColor1 bg-grey"></span>
                    <span onClick={()=> Colors(["bg-pampa","bg-pampa1","bg-pampa2","bg-pampa3"])} className="spanColor1 bg-pampa"></span>
                    
                    <p className='theme'>*Theme settings will be saved foryour next visit</p>

                </div>
                <div className="col-md-6  ">
                    <div className={` w-75  m-auto ${color[2]===undefined?"bg-white3":color[2]}`}>
                      <div className='data-me p-3  bg-transperant position-relative '>
                        <h1>Who I Am</h1>
                        <p>I'm a Software JavaScript Developer who can help your company to achieve more success and progress in the Web Development industry by translating your business ideas into real web applications.</p>
                        <span className="spanColor3 span1 "></span>
                        <span className="spanColor3 span2 "></span>
                        <span className="spanColor3 span3 "></span>
                        <span className="spanColor3 span4 "></span>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      
       

        </div>

    </div>
  )
}

export default Home