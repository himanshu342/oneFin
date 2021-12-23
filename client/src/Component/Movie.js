import react from 'react'
import '../css/movielist.css'
const Movie=(props)=>{
    const {movie}=props
  //  console.log(movie)
    const imagePath=`https://ui-avatars.com/api/?name=${movie.title}`
    return (
      <div className='col-md-6 mt-4'>

      
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-5">
            <img  src={imagePath} className="image" alt="..."/><br></br>
            <label className='gener'>{movie.genres}</label>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.description}</p>
             
            </div>
          </div>
        </div>
      </div>


      </div>

    )

}
export default Movie