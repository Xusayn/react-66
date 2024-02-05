import React, { useState } from 'react'
import './Addteacher.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Addteacher = () => {
  const [addt,setaddt]=useState([{
    firstname:'',
    lastname:'',
  }])
  const navigate=useNavigate()
 const addteacher= async(e)=>{
  try {
    e.preventDefault()
    const res=await axios.post(`http://localhost:3000/teachers`,addt)
    const dataa=await res.data
    setaddt(dataa)
    navigate('/')
  } catch (error) {
    console.log(error);
  }
 }

  return (
    <div className='addt'>
          <form>
            <input placeholder='FirstName...' onChange={(e)=>setaddt({...addt,firstname:e.target.value})}  type="text" />
            <input placeholder='LastName' onChange={(e)=>setaddt({...addt,lastname:e.target.value})} type="text" />
           <button onClick={(e)=>addteacher(e)}>Add</button>
          </form>
    </div>
  )
}

export default Addteacher
