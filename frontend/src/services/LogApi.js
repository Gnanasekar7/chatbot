import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:5000"
const Login_Url="/login"

export const LogApi=(formValues)=>
{
    let data={Email:formValues.email,Password:formValues.pass}
    return axios.post(Login_Url,data)  
}
