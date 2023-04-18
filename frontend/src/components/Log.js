import React,{useEffect,useState} from 'react'
import { LogApi } from '../services/LogApi'
// import { decode } from 'msgpack';
// import { BSON } from 'bson';
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
  // useEffect(()=>{
  //   fetch(`http://127.0.0.1:5000/check`)
  //   .then(res=>console.log(res.json()))
  //   .catch((e)=>{console.log(e)})  
  //   },[])
  
    // useEffect(() => {
    //   async function getUserList() {
    //     const response = await fetch('http://127.0.0.1:5000/check');
    //     const data = await response.json();
    //     console.log(data)
    //   }
    //   getUserList();
    // }, []);
    useEffect(()=>{
      if(Object.keys(formErrors).length === 0 && hasError){
      LogApi(formValues)
      .then((res)=>{if(res.data === 'Valid credendtials'){
        alert("valid credentials")
        navigate('/Luser')}
        else{
          alert("invalid credentials")
        }
      })
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