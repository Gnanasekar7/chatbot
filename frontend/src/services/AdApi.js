import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:5000"
const Admin_Url="/admincheck"

export const AdApi=(formValues)=>{
    let data={Email:formValues.email,Password:formValues.pass}
    return axios.post(Admin_Url,data)  
}
