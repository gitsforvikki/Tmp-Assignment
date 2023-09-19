import React from 'react';
import Navbar from './layout/Navbar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import ProblemA from './problems/ProblemA';
import ProblemB from './problems/ProblemB';
import ProblemC from './problems/ProblemC';
import Home from './layout/Home';


function App() {
  return (
    <div className="App">
   <Router>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/problemA' element={<ProblemA/>} />
      <Route path='/problemB' element={<ProblemB/>} />
      <Route path='/problemC' element={<ProblemC/>} />
    </Routes>
   </Router>
    </div>
  );
}

export default App;
