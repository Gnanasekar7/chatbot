import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:5000"
const Register_Url="/login"

export const RegisterApi=(formValues)=>{
    let data={Firstname:formValues.fname,Lastname:formValues.lname,Email:formValues.email,Passw:formValues.pass,Cpass:formValues.cpass}
    return axios.post(Register_Url,data)  
}
