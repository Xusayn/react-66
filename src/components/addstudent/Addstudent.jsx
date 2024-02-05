import React, { useState } from 'react'
import './Addstudnet.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Addstudent = () => {
  const [adds,setadds]=useState([{
    firstname:'',
    lastname:''
  }])
  const navigate =useNavigate()
  const addstudent= async(e)=>{
    try {
      e.preventDefault()
      const res=await axios.post(`http://localhost:3000/students`,adds)
      const dataa= await res.data
      console.log(dataa);
      setadds(dataa)
      navigate('/students')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='adds'>
        <form>
          <input onChange={(e)=>setadds({...adds,firstname:e.target.value})} placeholder='FirstName...' type="text" />
          <input  onChange={(e)=>setadds({...adds,lastname:e.target.value})} placeholder='LastName...' type="text" />
          <button onClick={(e)=>addstudent(e)} className='add'>Add</button>
        </form>
    </div>
  )
}

export default Addstudent
