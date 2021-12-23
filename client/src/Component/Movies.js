import { useEffect ,useState} from "react"
import react from 'react'
import axios from "axios"
import { Navigate, useLocation } from "react-router-dom"
import MoviesFeed from './MoviesFeed'
import Spinner from "./Spinner"

const Movies=(props)=>{

        const {state}=useLocation()
        console.log(state)
        const [movies,setmovies]=useState([])
        const [urlNext,seturl]=useState('')
    useEffect(()=>{
        let axiosConfig = {
            headers: {
                "Authorization": `Token ${state.token}`
            }
          };
           let url
            if(state.nexturl)
              url=state.nexturl
              else
              url='https://demo.credy.in/api/v1/maya/movies/'

          axios.get(url, axiosConfig).then(res=>{
                  console.log(res.data)
          
                     setmovies(res.data.results)
                     seturl(res.data.next)
                })
          .catch(err=>{
              console.log(err)
          })
    },[state])
    let moviecontent
    if(movies.length>0){
       moviecontent=<MoviesFeed movies={movies}  nexturl={urlNext} token={state.token}/>
    }
    else{
        moviecontent=<Spinner />
    }
    
     

    return(
      <div>
         
      {moviecontent}

      </div>
    
        
    )
}
export default Movies
