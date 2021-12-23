import react from 'react'
import Movie from './Movie'
import {useNavigate} from 'react-router-dom'
const MoviesFeed=(props)=>{
    const {movies,nexturl,token}=props
    // console.log(movies)
    // movies.map(movie =>{
    //     console.log(movie.title)
    // })
    console.log(nexturl)
      const navigate=useNavigate()
     const FetchNext=()=>{
      
          navigate('/Movies',{state:{nexturl:nexturl,token:token}})
               
     }
   
      return (
                <div className='container'>
                    <div className='row'>
                      {
                            movies.map((movieitem,i)=>(
                                <Movie key={i} movie={movieitem} />
                            ))
                      }
                      
                    </div>
                    <button className='btn btn-primary' onClick={FetchNext}>Next</button>
                </div>
         
                      
                  
      )
         
       
    
}

export default MoviesFeed