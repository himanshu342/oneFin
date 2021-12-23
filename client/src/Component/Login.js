import react ,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login=(props)=>{
    const navigate=useNavigate()
     const [name,setname]=useState('')
     const [password,setpassword]=useState('')
      const [error,seterror]=useState('')
     const onSubmit=(e)=>{
         e.preventDefault()
           const data={
               username:name,
               password
           }
          axios.post('https://demo.credy.in/api/v1/usermodule/login/',data).then(res=>{
                   console.log(res.data.data.token)
                   const token=res.data.data.token
                   navigate('/movies',{state:{token:token}})
          })
          .catch(err=>{
              console.log(err)
              seterror('either name or password is wrong!!')
          })
     }

    return (

        <div className='container'>
         
         <div className="card" >
             
          <div className="card-body">
            <h5 className="card-title">Login Form</h5>
            {error.length!==0&& (<div style={{color:"red"}}>{error}</div>)}
            <form onSubmit={onSubmit}>
                <div className="form-group">
                   
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" onChange={(e)=>setname(e.target.value)}/>
                    
                </div> <br/>
                <div className="form-group">
         
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  onChange={(e)=>setpassword(e.target.value)}/>
                </div><br/>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
          </div>
        </div>

        </div>
    )

}
export default Login