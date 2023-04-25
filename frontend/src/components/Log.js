import React,{useEffect,useState} from 'react'
import { LogApi } from '../services/LogApi'

import { useNavigate } from 'react-router-dom'
function Log() {

    const navigate = useNavigate();
    const initialValues={email:'',pass:''}
    const[formValues,setFormValues]=useState(initialValues) 
    const[formErrors,setFormErrors]=useState({})
    const[hasError,setHasError]=useState(false)
    const handleChange=(e)=>
  {      
    const {name,value}=e.target
    setFormValues({...formValues, [name] :value})
    console.log(formValues,"usestar")
  }
  const validate = (value)=>{
    const errors={}
    
    if(!value.email){
        errors.fname="email is required"
    }
    if(!value.pass){
        errors.lname="password is required"
    }
    return errors
}
const handleSubmit=(e)=>{
  e.preventDefault()
  setFormErrors(validate(formValues))
  setHasError(true)
}
  
    useEffect(()=>{
      if(Object.keys(formErrors).length === 0 && hasError){
      LogApi(formValues)
      .then((res)=>
      {
       
        console.log(res.headers.get('Authorization'))
       
        if (res.headers.get('Authorization')) {
          const token = res.headers.get('Authorization');
          const expirationTime = Date.now() + 15 * 1000; // 1 hour in milliseconds
          localStorage.setItem('token', JSON.stringify({ token, expirationTime }));
        }
        if (localStorage.getItem('token')) {
          const { token, expirationTime } = JSON.parse(localStorage.getItem('token'));
          if (Date.now() < expirationTime) {
            navigate('/Luser');
          } else {
            localStorage.removeItem('token');
          }
        }
      }
      
      )
      .catch(e=>console.log(e))
    }
  },[formErrors])

  return (
    <div>
        <form className='form' method="post" onSubmit={handleSubmit}>
        <div className='title'>User Login</div>
        <label>Email    </label>
        <input type='email' placeholder="Email"  name="email" value={formValues.email} onChange={handleChange}></input>
        <p>{formErrors.email}</p>
        <label>Password  </label>
        <input type='password' placeholder='Password' name="pass" value={formValues.pass} onChange={handleChange}></input>
        <input type='submit' value='Submit'  /*onClick={() => window.location.reload(false)}*/></input>
        </form>
    </div>
  );
}

export default Log