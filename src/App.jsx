import React, { useState } from 'react'
import Students from './components/students/Students'
import Teachers from './components/teachers/Teachers'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Addstudent from './components/addstudent/Addstudent'
import Addteacher from './components/addteacher/Addteacher'
const App = () => {

  const [bar, setbar]=useState(false)  
  return (
    <div className='app'>
      
      {bar?<div className="sidebar">
      <i class="fa-solid fa-user"></i>
      <i class="fa-solid fa-user-tie"></i>
      </div>:<div className="sidebarr">
      <NavLink className="icons" to='/students'><div className="icons"><i class="fa-solid fa-user"></i><h3>Students</h3></div></NavLink>
      <NavLink  className="iconss" to='/'><div className="iconss"> <i class="fa-solid fa-user-tie"></i> <h3>Teachers</h3></div></NavLink>
      </div>}

      <div className="container">

      <nav>
     {bar? <i id='left' onClick={()=>setbar(!bar)} className="fa-solid fa-chevron-left"> Close</i>: <i onClick={()=>setbar(!bar)} id='left' className="fa-solid fa-chevron-right"> Open </i>}
      </nav>
    
    
      <Routes>
        <Route path='/students' element={<Students/>}/>
        <Route path='/adds' element={<Addstudent/>}/>
        <Route path='/addt' element={<Addteacher/>}/>




        <Route path='/' element={<Teachers/>}/>
      </Routes>
      </div>



    </div>
  )
}

export default App
