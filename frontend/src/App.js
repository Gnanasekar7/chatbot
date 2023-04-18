import './App.css';
import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Log from './components/Log';
import Register from './components/Register'
import Luser from './components/Luser';
import Admin from './components/Admin';
import Ladmin from './components/Ladmin';
import Home from './components/Home';

function App() {
return(
<div className="App">
      <BrowserRouter>   
      
      <nav>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Register' element={<Register/>}></Route>
            <Route path='/login' element={<Log/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/Ladmin' element={<Ladmin/>}></Route>
            <Route path='/Luser' element={<Luser/>}></Route>

        </Routes>
    </nav>
    
      </BrowserRouter>
</div>
);

}

export default App;
