
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './Component/Login'
import Movies from './Component/Movies';


const App=()=> {
  return (
    <div className="App">
      
      <Router>
        <Routes>
        <Route exact={true} path='/' element={<Login/>}/>
        <Route exact={true} path='/movies' element={<Movies/>}/>
        </Routes>

  
        

      </Router>
       
    </div>
  );
}

export default App;
