import React,{useEffect} from 'react'
import axios from "axios"
function Luser() {
  console.log("hhhhhh")
  useEffect(()=>
  {  axios.get('http://127.0.0.1:5000/protected-user',
   {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
      
    })
    .then(response => {
      console.log((response))
    })
    .catch(error => {
      console.error(error);
    })
    axios.get("http://127.0.0.1:5000/userreq")
    .then(res=>{
      console.log(res)
    })
    .catch(e=>{
      console.log(e)
    })
      
  }
  ,[])
  return (
    <div>Luser
</div>
  )
}

export default Luser