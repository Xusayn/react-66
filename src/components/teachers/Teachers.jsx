import React, { useEffect, useState } from 'react'
import './Teachers.scss'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
const Teachers = () => {
  const [teachers, setteachers]=useState([])
  const getteachers = async()=>{
    try {
      const res=await axios.get(`http://localhost:3000/teachers`)
      const dataa =await res.data
      setteachers(dataa)
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getteachers()
  },[])

  const deleteteachers= async(id)=>{
    try {
      const res=await axios.delete(`http://localhost:3000/teachers/${id}`)
      getteachers()
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='teachers'>
     <Link to='/addt'> <button className='add'><h4>Add teacher</h4>   <i className="fa-solid fa-user-plus"></i></button></Link>
      {teachers.map((ts)=>(
        <div className="ts">
          <h3>{ts.firstname}</h3>
          <h3>{ts.lastname}</h3>
          <div className="control">  
          <button className='edit'>Edit</button>
         <button onClick={()=>deleteteachers(ts.id)} className='delete'>Delete</button>  
          </div>
        </div>
      ))}
    </div>
  )
}

export default Teachers
