import React from 'react'
import img1 from "../Image/crud.png"
import img2 from "../Image/movies.png"
import img3 from "../Image/games.png"
import img4 from "../Image/fadl.png"
const Projects = ({color}) => {
  return (
    <div className='py-3'>
        <h1 className='text-mobile text-center py-3'>Best Projects / Live Productions</h1>
        <div className="container">
            <div className="row">
            
            <div className="col-md-6 py-3">
                    <div className='project'>
                        <img src={img2} className='img-project w-100'/>
                        <h6 className='fw-bold p-3 text-black'>MOVIES</h6>
                        <p className='text-project p-3 text-muted'>A site that shows you the movies that topped the trend, find out every detail you want to know about the movie, know the directors, and many details, and I have used React</p>
                        <a target='_blank' href='http://movie-ziad.vercel.app/'>  <button className={`btn2  ${color[3]==="bg-white4"?color[3]+ " text-white":color[3]+" text-white"}`}> Live Preview</button></a>

                    </div>
                </div>

            <div className="col-md-6 py-3">
                    <div className='project'>
                        <img src={img3} className='img-project w-100'/>
                        <h6 className='fw-bold p-3 text-black'>Games</h6>
                        <p className='text-project p-3 text-muted'>A games website that gives you a speed of use that you cannot find on any other site, as it enables you to download the latest games and try them with the lowest service.</p>
                        <a href='https://ziadahmed92.github.io/Games/'> <button className={`btn2  ${color[3]==="bg-white4"?color[3]+ " text-white":color[3]+" text-white"}`}> Live Preview</button></a> 

                    </div>
                </div>
              
                <div className="col-md-6 py-3">
                    <div className='project'>
                        <img src={img1} className='img-project w-100 '/>
                        <h6 className='fw-bold p-3  text-black'>CRUD</h6>
                    <p className='text-project p-3 text-muted'>The project is a system that allows the user to add, remove, and modify any products that I have used javascript and Html And css</p>
                  <a href='https://ziadahmed92.github.io/Crud/crud.html'>  <button className={`btn2   ${color[3]==="bg-white4"?color[3]+ " text-white":color[3]+" text-white"}`}> Live Preview</button></a>

                    </div>
                </div>
                <div className="col-md-6 py-3">
                    <div className='project'>
                        <img src={img4} className='img-project w-100 '/>
                        <h6 className='fw-bold p-3 text-black'>Material</h6>
                    <p className='text-project p-3 text-muted'>A site that helps you find summaries and the practical part in all academic subjects , It is assigned to the Korean College of Technology, Department of Mechatronics</p>
                   <a target='_blank' href='http://app2-v7ma.vercel.app/'> <button className={`btn2  ${color[3]==="bg-white4"?color[3]+ " text-white":color[3]+" text-white"}`}> Live Preview</button></a>

                    </div>
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Projects