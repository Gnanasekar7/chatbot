import React,{ useState,useEffect } from 'react';
import { RegisterApi } from '../services/RegisterApi';
import { useNavigate } from 'react-router-dom';


function Register(){
  const navigate = useNavigate();
  const initialValues={fname:'',lname:'',email:'',pass:'',cpass:''}
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
    
    if(!value.fname){
        errors.fname="FirstName is required"
    }
    if(!value.lname){
        errors.lname="LasttName is required"
    }
    if(!value.email){
        errors.email="Email is required"
    } 
    if(value.pass.length <6){
        errors.pass="invalid pass"
    }
    if(value.pass !==value.cpass){
      errors.cpass="Password Mismatch"
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
      RegisterApi(formValues)
      .then((response)=>{               
          if(response.status === 200){
              alert("successfully registered")
              navigate('/Luser')
          console.log(response)
        }
        else{
          alert("enter credentials as per norms  ")
        }
      }               
    ).catch((err)=>{
          console.log(err)
      })
    }
},[formErrors])  

  return (
    <div className="App">
      <div className='form' method="post" onSubmit={handleSubmit}>
                <div className='title'>SignUp</div>
                <div className='inputs'>
                    <form >
                        <label>First Name    </label>
                        <input type='text' placeholder='First Name' name="fname" value={formValues.fname} onChange={handleChange}></input>
                        
                        <p>{formErrors.fname}</p>
                        <label>Last Name    </label>
                        <input type='text' placeholder='Last Name' name="lname" value={formValues.lname} onChange={handleChange} ></input>                   
                        <br/>
                        <p>{formErrors.lname}</p>
                        <label>Email    </label>
                        <input type='email' placeholder="Email"  name="email" value={formValues.email} onChange={handleChange}></input>
                        <br/>
                        <p>{formErrors.email}</p>
                        <label>Password  </label>
                        <input type='password' placeholder='Password' name="pass" value={formValues.pass} onChange={handleChange}></input>
                        <br/>
                        <p>{formErrors.pass}</p>
                        <label> Confirm Password  </label>
                        <input type='password' placeholder='Confirm Password' name="cpass" value={formValues.cpass} onChange={handleChange}></input>
                        <br/>
                        <p>{formErrors.cpass}</p>
                        <input type='submit' value='Register'  /*onClick={() => window.location.reload(false)}*/></input>
                     </form>
                  </div>
                </div>
    </div>
  );
}
export default Register