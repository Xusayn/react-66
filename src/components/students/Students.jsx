import React, { useEffect, useState } from 'react'
import './Students.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Students = () => {
  const [students,setstudents]=useState([])
  const navigate =useNavigate()
  const getstudents = async()=>{
    try {
      const res= await axios.get(`http://localhost:3000/students`)
      const dataa= await res.data
      setstudents(dataa)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getstudents()
  },[])


  const deletestudent=async(id)=>{
    try {
      const res=await axios.delete(`http://localhost:3000/students/${id}`)
      getstudents()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='students'>
      <button onClick={()=>navigate('/adds')} className='add'><h4>Add student</h4> <i className="fa-solid fa-user-plus"></i></button>




      {students.map((st)=>(
        <div className="st" key={st.id}>
          <h3>{st.firstname}</h3>
          <h3>{st.lastname}</h3>  
          <div className="control">
          <button className='edit'>Edit</button>
          <button onClick={()=>deletestudent(st.id)} className='delete'>Delete</button>

          </div>
        </div>
        
      ))}
    </div>
  )
}

export default Students
